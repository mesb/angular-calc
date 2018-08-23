import {Component, OnInit} from '@angular/core';
import {OperatorService} from '../../../services/operators/operator.service';
import {Digit, Operator} from '../../../models/key';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  // appState: State;

  constructor(private store: OperatorService) {
  }

  ngOnInit() {
  }

}
