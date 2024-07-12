import { ProviderType } from '../enum/ProviderType';
import { AWS_ResourceType } from './Codegen/aws_resources/ResourceType';
import { GCP_ResourceType } from './Codegen/gcp_resources/ResourceType';

export class CloudResource {
  public id: string = '';
  public name: string = '';
  public title: string = 'Description';
  public resourceType: GCP_ResourceType | AWS_ResourceType = 0;
  public providerType: ProviderType = 0;
  public resourceConfig: Resource | undefined = new DefaultResource();
  public position = { x: 490, y: 200 };
  public shape = { width: 110, height: 40 };
  public iconSrc: string = '';
  public status: ResourceStatus = ResourceStatus.Draft;
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

export abstract class Resource {
  // constructor(public BaseName: string, public PlatformType: string) {}
}

export class DefaultResource extends Resource {
  // constructor() {
  // //  super('Def', 'None');
  // }
}
