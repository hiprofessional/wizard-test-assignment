import { Component, OnInit } from '@angular/core';
import { Status, Step } from '../models/wizard';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  steps: Step[] = [];
  currentStep = 1;
  constructor() { }

  ngOnInit(): void {
    this.initSteps();
  }

  initSteps() {
    this.steps = [
      {
        Id: 1,
        Header: 'Profile',
        Status: Status.Active,
      },
      {
        Id: 2,
        Header: 'Check <br> something',
        Status: Status.Inactive,
      },
      {
        Id: 3,
        Header: 'Finish',
        Status: Status.Inactive,
      },
    ]
  }

  getClassName(status: Status) {
    let result = '';
    switch (status) {
      case Status.Active:
        result = 'active';
        break;
      case Status.Done:
        result = 'done';
        break;
      case Status.Inactive:
        result = 'inactive';
    }
    return result;
  }

  next() {
    let index = this.steps.findIndex(el => el.Id == this.currentStep);
    this.steps[index].Status = Status.Done;
    if (index < this.steps.length - 1) {
      ++index;
      this.currentStep = this.steps[index].Id;
      this.steps[index].Status = Status.Active;
    }
  }
}
