import {Component, OnInit} from '@angular/core';
import {Digit, Key, Operator, DIGIT} from '../../../../models/key';
import {OperatorService} from '../../../../services/operators/operator.service';

@Component({
  selector: 'app-key-pad',
  templateUrl: './key-pad.component.html',
  styleUrls: ['./key-pad.component.scss']
})
export class KeyPadComponent implements OnInit {
  keys: Key[] = [
    Operator('CLEAR', 'C'),
    Operator('MOD', '%'),
    Operator('TIMES', 'x'),
    Operator('DIV', '/'),
    Digit(7),
    Digit(9),
    Digit(8), Operator('MINUS', '-'),
    Digit(6),
    Digit(5),
    Digit(4),
    Operator('PLUS', '+'),
    Digit(3),
    Digit(2),
    Digit(1),
    Operator('EQUALS', '='),
    Digit(0),
  ];

  constructor(private store: OperatorService) {
  }

  ngOnInit() {
    // for (let i = 9; i >= 0; i--) {
    //  const temp = Digit(<DIGIT>i);
    //  this.keys.push(temp);
    // }
    // this.keys.push(Operator('EQUALS', '='));
    // this.keys.concat(this.signs);

  }

}
