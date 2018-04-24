import { Component} from '@angular/core';

@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.css']
})
export class NgbdDatepickerPopup {
  model = {
    "year": 2018,
    "month": 4,
    "day": 13
  };


  constructor() {
  }

  save(): void {
    console.log();

  }

}
