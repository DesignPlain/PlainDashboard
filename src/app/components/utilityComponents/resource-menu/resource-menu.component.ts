import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { GCP_ResourceProperties } from 'src/app/Models/Codegen/gcp_resources/ResourceProperties';
import { GCP_ResourceType } from 'src/app/Models/Codegen/gcp_resources/ResourceType';
import { AddComponentService } from 'src/app/services/add-component.service';
import { VisualResource } from '../../resource-list/VisualResource';
import { ProviderType } from 'src/app/enum/ProviderType';
@Component({
  selector: 'resource-menu',
  templateUrl: './resource-menu.component.html',
  styleUrls: ['./resource-menu.component.scss'],
})
export class ResourceMenuComponent {
  public faChevronDown = faChevronDown;
  @Input()
  public selected: string = 'Please select';

  resources: number[] = [
    ...GCP_ResourceProperties.ResourceFactoryMap.keys(),
  ].map((x) => x);

  public items = this.resources;

  change(event: any) {
    this.items = this.resources.filter((x) =>
      GCP_ResourceType[x].toLowerCase().includes(event.target.value)
    );
  }

  public expand: boolean = true;
  GCP_ResourceType = GCP_ResourceType;

  constructor(private _addComponentService: AddComponentService) {}
  addComponent(resource: VisualResource) {
    //console.log(componentName);
    this._addComponentService.components.next(resource);
  }

  public expandOptions() {
    this.expand = true;
  }

  @Output()
  public done = new EventEmitter();

  public selectItem(item: number) {
    this.expand = false;

    let res = new VisualResource(
      this.selected,
      ProviderType.GCP,
      item,
      '../../../assets/GCPIcons/gcp-logo.png'
    );
    this.addComponent(res);
    this.done.emit();
  }

  public getResourceString(res_index: number) {
    let str = GCP_ResourceType[res_index].toLowerCase().replace('_', ' ');
    let sp_index = str.indexOf(' ');
    return (
      str.charAt(0).toUpperCase() +
      str.slice(1, sp_index + 1) +
      str.charAt(sp_index + 1).toUpperCase() +
      str.slice(sp_index + 2)
    );
  }
}
