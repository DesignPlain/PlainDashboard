import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faClose,
  faGear,
  faInfoCircle,
  faInfo,
  faTrash,
  faTriangleExclamation,
  faDiagramProject,
  faList,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import {
  DefaultResource,
  Resource,
  Outputs,
  CloudResource,
} from 'src/app/Models/CloudResource';
import { InputType } from 'src/app/enum/InputType';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

import { GCP_ResourceType } from 'src/app/Models/Codegen/gcp_resources/ResourceType';
import { ProviderType } from 'src/app/enum/ProviderType';
import { AWS_ResourceType } from 'src/app/Models/Codegen/aws_resources/ResourceType';
import { AddComponentService } from 'src/app/services/add-component.service';
import { VisualResource } from '../resource-list/VisualResource';
import { ResourceMenuComponent } from '../utilityComponents/resource-menu/resource-menu.component';
import { GCP_ResourceProperties } from 'src/app/Models/Codegen/gcp_resources/ResourceProperties';
import { AWS_ResourceProperties } from 'src/app/Models/Codegen/aws_resources/ResourceProperties';
import { DynamicUIPropState } from './DynamicUIPropState';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-resource-config',
  templateUrl: './resource-config.component.html',
  styleUrls: ['./resource-config.component.scss'],
})
export class ResourceConfigComponent implements OnInit {
  constructor(
    private _addComponentService: AddComponentService,
    private _modalDialogService: ModalDialogService
  ) {}

  static RESOURCE_ID_ARRAY: number[] = [
    ...GCP_ResourceProperties.ResourceFactoryMap.keys(),
    ...AWS_ResourceProperties.ResourceFactoryMap1.keys(),
    ...AWS_ResourceProperties.ResourceFactoryMap2.keys(),
  ].map((x) => x);

  view: number = 0;

  public faClose: IconDefinition = faClose;
  public faInfo: IconDefinition = faInfoCircle;
  public faGear: IconDefinition = faGear;
  public faError: IconDefinition = faTriangleExclamation;
  public faDetails: IconDefinition = faList;
  public faRelated: IconDefinition = faDiagramProject;
  public fafile: IconDefinition = faFileLines;

  public show = '';
  @Input() currentResource: GCP_ResourceType | AWS_ResourceType | undefined;
  @Input() currentIndex: number = -1;
  @Input() resId: string = '';
  resConfig: Resource = new DefaultResource();

  @Input() config: Map<string, DynamicUIPropState> = new Map();
  @Input() currentOutput: Outputs[] = [];
  @Input() lastError: string = '';
  @Input() yamlData: string = '';
  edit: boolean = false;

  inputType = InputType;
  gcp_resourceType = GCP_ResourceType;
  aws_resourceType = AWS_ResourceType;

  ngOnInit(): void {
    console.log(this.currentOutput);
    console.log(this.config);
  }

  public closeModal() {
    this._modalDialogService.ActiveModal.dispose();
  }

  getValue(arg: any) {
    return JSON.stringify(arg);
  }

  @Output()
  configUpdateEvent = new EventEmitter<{ id: number; res: Resource }>();

  @Output()
  subConfigOpen = new EventEmitter<{ id: number; res: Resource }>();

  set = false;
  listMap = new Map<string, any>();
  check = false;

  getResourceName(): string {
    if (
      this.currentResource != undefined &&
      this.currentResource > AWS_ResourceType.ACCESSANALYZER_ANALYZER
    ) {
      return AWS_ResourceType[this.currentResource as AWS_ResourceType];
    } else {
      return GCP_ResourceType[this.currentResource as GCP_ResourceType];
    }
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

  onclick(res_index: number) {
    let res: VisualResource;
    if (res_index < AWS_ResourceType.ACCESSANALYZER_ANALYZER) {
      res = new VisualResource(
        GCP_ResourceType[res_index],
        ProviderType.GCP,
        res_index,
        '/assets/GCPIcons/gcp-logo.png'
      );
    } else {
      res = new VisualResource(
        AWS_ResourceType[res_index],
        ProviderType.AWS,
        res_index,
        '/assets/aws-logo.png'
      );
    }

    this._addComponentService.components.next(res);
    this.subConfigOpen.emit({ id: res_index, res });
  }

  public getRelatedResources(): number[] {
    if (
      this.currentResource != undefined &&
      this.currentResource > AWS_ResourceType.ACCESSANALYZER_ANALYZER
    ) {
      let current_res =
        AWS_ResourceType[
          this.currentResource as AWS_ResourceType
        ].toLowerCase();

      let current_res_family = current_res.split('_');
      let resource_ids = new Map<number, undefined>();

      let related = ResourceConfigComponent.RESOURCE_ID_ARRAY.slice(
        GCP_ResourceProperties.ResourceFactoryMap.size
      ).filter((id) => {
        let resource_name_lower = AWS_ResourceType[id].toLowerCase();

        if (
          resource_name_lower != current_res &&
          current_res_family
            .slice(0, 2)
            .every((element: string) => resource_name_lower?.includes(element))
        ) {
          resource_ids.set(id, undefined);
        }

        return (
          resource_name_lower != current_res &&
          [current_res_family[0]].every((element: string) =>
            resource_name_lower.includes(element)
          )
        );
      });

      resource_ids.set(-1, undefined);
      related.forEach((id) => resource_ids.set(id, undefined));

      return [...resource_ids.keys()];
    } else {
      let current_res =
        GCP_ResourceType[
          this.currentResource as GCP_ResourceType
        ].toLowerCase();

      let current_res_family = current_res.split('_');
      let resource_ids = new Map<number, undefined>();

      let related = ResourceConfigComponent.RESOURCE_ID_ARRAY.slice(
        0,
        GCP_ResourceProperties.ResourceFactoryMap.size
      ).filter((id) => {
        let resource_name_lower = GCP_ResourceType[id]?.toLowerCase();

        if (
          resource_name_lower != current_res &&
          current_res_family
            .slice(0, 2)
            .every((element: string) => resource_name_lower?.includes(element))
        ) {
          resource_ids.set(id, undefined);
        }

        return (
          resource_name_lower != current_res &&
          [current_res_family[0]].every((element: string) =>
            resource_name_lower?.includes(element)
          )
        );
      });

      resource_ids.set(-1, undefined);
      related.forEach((id) => resource_ids.set(id, undefined));

      return [...resource_ids.keys()];
    }
  }

  public UpdateResourceConfig(it: Map<string, any>): void {
    it.forEach((v, k) => {
      //console.log(k, v);
      this.listMap.set(k, v);
    });

    //console.log(this.listMap);
  }

  submit() {
    if (this.currentResource != null) {
      let currentConfig = new Map<string, any>();
      this.config.forEach((k, v) => {
        if (this.listMap.get(v) == undefined) {
          currentConfig.set(v, k.val);
        }
      });

      let resMap = new Map([...this.listMap, ...currentConfig]);
      this.resConfig = Object.fromEntries(resMap.entries()) as Resource;

      //console.log('Final submit', this.resConfig);
      this.configUpdateEvent.emit({
        id: this.currentIndex,
        res: this.resConfig,
      });
    }
  }
}
