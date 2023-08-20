import { Component, Input, OnInit } from '@angular/core';
import { InputType } from 'src/app/enum/InputType';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input()
  public config: Map<string, InputType> = new Map;

  inputType = InputType

  ngOnInit(): void {


  }
}
