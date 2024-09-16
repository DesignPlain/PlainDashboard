import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AddComponentService } from 'src/app/services/add-component.service';
import { VisualResource } from '../../resource-list/VisualResource';
import { ProviderType } from 'src/app/enum/ProviderType';

import { ResourceType as GCP_ResourceType } from 'src/app/Models/codegen/gcp/ResourceType';
import { ResourceType as AWS_ResourceType } from 'src/app/Models/codegen/aws/ResourceType';

import { ResourceProperties as GCP_ResourceProperties } from 'src/app/Models/codegen/gcp/ResourceProperties';
import { ResourceProperties as AWS_ResourceProperties } from 'src/app/Models/codegen/aws/ResourceProperties';

@Component({
  selector: 'resource-menu',
  templateUrl: './resource-menu.component.html',
  styleUrls: ['./resource-menu.component.scss'],
})
export class ResourceMenuComponent {
  static resources: number[] = [
    ...GCP_ResourceProperties.ResourceFactoryMap1.keys(),
    ...AWS_ResourceProperties.ResourceFactoryMap1.keys(),
    ...AWS_ResourceProperties.ResourceFactoryMap2.keys(),
  ].map((x) => x);

  GCP_ResourceType = GCP_ResourceType;
  AWS_ResourceType = AWS_ResourceType;
  public faChevronDown = faChevronDown;
  @Input()
  public selected: string = 'Please select';
  public items = ResourceMenuComponent.resources;
  public expand: boolean = true;

  constructor(private _addComponentService: AddComponentService) {}

  addComponent(resource: VisualResource) {
    //console.log(componentName);
    this._addComponentService.components.next(resource);
  }

  change(event: any) {
    this.items = ResourceMenuComponent.resources.filter((x) => {
      let str =
        x < AWS_ResourceType.ACCESSANALYZER_ANALYZER
          ? GCP_ResourceType[x]
          : AWS_ResourceType[x];

      str = str.toLowerCase();
      return event.target.value
        .toLowerCase()
        .split(' ')
        .every((element: string) => str.includes(element));
    });
  }

  expandOptions() {
    this.expand = true;
  }

  @Output()
  done = new EventEmitter();

  public selectItem(res_index: number) {
    this.expand = false;
    let res: VisualResource;
    if (res_index < AWS_ResourceType.ACCESSANALYZER_ANALYZER) {
      res = new VisualResource(
        this.selected,
        ProviderType.GCP,
        res_index,
        '/assets/GCPIcons/gcp-logo.png',
      );
    } else {
      res = new VisualResource(
        this.selected,
        ProviderType.AWS,
        res_index,
        '/assets/aws-logo.png',
      );
    }

    this.addComponent(res);
    this.done.emit();
  }

  public getResourceString(res_index: number): String[] {
    let str = 'NotFound';
    let logo_path = 'NotFound';
    if (res_index < AWS_ResourceType.ACCESSANALYZER_ANALYZER) {
      str = GCP_ResourceType[res_index].toLowerCase().replace('_', ' ');
      logo_path = '/assets/GCPIcons/gcp-logo.png';
    } else {
      str = AWS_ResourceType[res_index].toLowerCase().replace('_', ' ');
      logo_path = '/assets/aws-logo.png';
    }

    let sp_index = str.indexOf(' ');

    let result = [
      str.charAt(0).toUpperCase() +
        str.slice(1, sp_index + 1) +
        str.charAt(sp_index + 1).toUpperCase() +
        str.slice(sp_index + 2),
      logo_path,
    ];

    return result;
  }
}
