import { Component, OnInit } from '@angular/core';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import { AddComponentService } from 'src/app/services/add-component.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit{
  faTrash = faTractor;
  constructor(private _addComponentService: AddComponentService) {}
  public items:string[] = []
  ngOnInit(): void {
    this._addComponentService.components.subscribe((componentName: string) => {
      this.items.push(componentName)
    })
  }

  trashShit(i: number): void {
    console.log(i)
    this.items.splice(i, 1);
  }
}
