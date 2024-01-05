import { Component, Input } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  public faChevronDown = faChevronDown;
  @Input()
  public selected: string = 'Please select';
  @Input()
  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public expand: boolean = false;

  public expandOptions() {
    this.expand = !this.expand;
  }

  public selectItem(item: string) {
    this.selected = item;
    this.expand = false;
  }
}
