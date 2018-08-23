import {Component, Input, OnInit} from '@angular/core';
import {OperatorService} from '../../../../services/operators/operator.service';
import {State} from '../../../../models/state';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  state: State;

  constructor(private store: OperatorService) { }

  ngOnInit() {

    this.store.getState()
      .subscribe(
        (response) => { this.state = response;
          console.log('Screen: ', response);
        },
        (err) => {
          console.log('ScreenError: ', err);
        },
        () => {
          console.log('ScreenCompleted');
        }
      );
  }

}
