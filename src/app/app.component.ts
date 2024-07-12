import { Component } from '@angular/core';

import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showObj(ele: any): boolean {
    let val = ele.getAttribute('data');
    if (val == 'false') {
      return false;
    }

    return true;
  }

  public toggle(ele: any) {
    let val = ele.getAttribute('data');

    if (val == 'false') {
      ele.setAttribute('data', true);
    } else {
      ele.setAttribute('data', false);
    }
  }

  title = 'DesignSphere';
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
}
