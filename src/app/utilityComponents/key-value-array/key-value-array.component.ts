import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from '@fortawesome/free-regular-svg-icons';
import { faAdd, faClose, faCross } from '@fortawesome/free-solid-svg-icons';
import { DynamicUIPropState } from 'src/app/components/resource-config/resource-config.component';

@Component({
  selector: 'key-value-array',
  templateUrl: './key-value-array.component.html',
  styleUrl: './key-value-array.component.scss',
})
export class KeyValueArrayComponent {
  @Input() config: Map<string, DynamicUIPropState> = new Map();
  configValues: Map<string, DynamicUIPropState>[] = [];
  public faClose: IconDefinition = faClose;
  public faAdd: IconDefinition = faAdd;
  public faDown: IconDefinition = faArrowAltCircleDown;
  public faUp: IconDefinition = faArrowAltCircleUp;

  public deleteValue(pos: number) {
    console.log('Index is', pos, this.configValues);

    this.configValues.splice(pos, 1);
  }

  public AddValue() {
    this.configValues.push(this.config);
  }

  public show(ele: any): boolean {
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
}
