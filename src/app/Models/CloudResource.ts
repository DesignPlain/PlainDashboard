import { ProviderType } from '../enum/ProviderType';
import { ResourceType as GCP_ResourceType } from 'src/app/Models/codegen/gcp/ResourceType';
import { ResourceType as AWS_ResourceType } from 'src/app/Models/codegen/aws/ResourceType';
import { DS_Resource } from 'src/app/Models/codegen/ds_base/Resource';

export class CloudResource {
  public id: string = '';
  public name: string = '';
  public title: string = 'Title';
  public desc: string = 'Description';
  public resourceType: GCP_ResourceType | AWS_ResourceType = 0;
  public providerType: ProviderType = 0;
  public resourceConfig: DS_Resource | undefined = new DefaultResource();
  public position = { x: 340, y: 100 };
  public shape = { width: 100, height: 40 };
  public iconSrc: string = '';
  public status: ResourceStatus = ResourceStatus.Draft;
  public selected: boolean = false;
  public lastError: string = '';
  public yamlContent: string = '';
  public inlets: string[] = [];
  public outlets: string[] = [];
  public inletMap: Map<string, LineCoordinates> = new Map<
    string,
    { x1: number; y1: number; x2: number; y2: number }
  >();
  public outletMap: Map<string, LineCoordinates> = new Map<
    string,
    { x1: number; y1: number; x2: number; y2: number }
  >();
  public resOutputs: Outputs[] = [];
  public deploying: boolean = false;
}

export enum ResourceStatus {
  Draft,
  Deployed,
  Errored,
}

export abstract class LineCoordinates {
  public x1: number = 0;
  public y1: number = 0;
  public x2: number = 0;
  public y2: number = 0;
}

export class Outputs {
  public name: string = '';
  public value: string = '';
}

export class DefaultResource extends DS_Resource {
  // constructor() {
  // //  super('Def', 'None');
  // }
}
