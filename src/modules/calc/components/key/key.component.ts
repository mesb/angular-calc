import {Component, Input, OnInit} from '@angular/core';
import {Key} from '../../../../models/key';
import {OperatorService} from '../../../../services/operators/operator.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

  @Input() value: Key;

  constructor(private store: OperatorService) { }

  ngOnInit() {
  }

  dispatchValue() {
    this.store.dispatch(this.value);
  }

}
