import {Injectable} from '@angular/core';
import {State} from '../../models/state';
import {BehaviorSubject} from 'rxjs';
import {Key, DIGIT, Operator} from '../../models/key';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  private memory: BehaviorSubject<State>;

  /*
    Create the initial memory state of the application
   */
  constructor() {
    this.memory = new BehaviorSubject({lcd: 0, lka: Operator('EQUALS'), loa: Operator('EQUALS'), vpr: 0});
  }

  // the evaluator for the calculator
  private static evaluate (arg1: number, arg2: number, key: Key): number {
    switch (key.type) {
      case 'PLUS':
        return arg1 + arg2;
      case 'MINUS':
        return arg1 - arg2;
      case 'TIMES':
        return arg1 * arg2;
      case 'MOD':
        return arg1 % arg2;
      case 'DIV':
        return arg1 / arg2;
      case 'EQUALS':
        return arg2;
      case 'DIGIT':
        Error('OperatorService::evaluate: no op');
    }
  }

  // return the current state of affairs
  public getState(): BehaviorSubject<State> {
    return this.memory;
  }

  /*
    2 cases arise when a digit is entered:
    1. last key activated was a digit, hence continue the decimal number:
      update state with new 'lka' and update the value printed on screen
    2. last key activated was an operator, so start accumulating a new number:
      update the last key activated, and the value printed on screen field to show the new number
   */
  private digit_transition(digit: number, key: Key, prevState: State) {
    switch (prevState.lka.type) {
      case 'DIGIT': { // if the last key activated was also a digit, build the decimal
        this.memory.next({lcd: prevState.lcd, lka: key, loa: prevState.loa, vpr: ((prevState.vpr * 10) + digit)});
        break;
      }

      default: // if lka was an operator, then start a new number
        this.memory.next({lcd: prevState.lcd, lka: key, loa: prevState.loa, vpr: digit});
    }
  }

  // the transition function for the calculator
  /*
  transition gets the previous state from memory, applies it to the new key and updates memory
  if a digit is pressed, send the last key activated, so that the number field can be updated accordingly on the screen
  else reduce all values with the assistance of the operator just entered.
  stack based calculator
   */
  private transition(key: Key, prevState: State) {
    switch (key.type) {
      case 'DIGIT': { // if current key is a digit, process it with the assistance of the lka
        this.digit_transition(<DIGIT>key.value, key, prevState);
        break;
      }

      case 'CLEAR': {
        this.memory.next({lcd: 0, lka: Operator('EQUALS'), loa: Operator('EQUALS'), vpr: 0});
        break;
      }

      // this looks like a stack based processor. Apply operator that's at top of stack to the rest of the stack
      default: { // process the loa against the lcd and the vpr to get a result
        const result = OperatorService.evaluate(prevState.lcd, prevState.vpr, prevState.loa);
        this.memory.next({lcd: result, lka: key, loa: key, vpr: result});
      }
    }
  }

// dispatch action on store
  public dispatch(key: Key) {
    this.transition(key, this.memory.getValue());
  }
}
