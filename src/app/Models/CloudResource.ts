import { ProviderType, ResourceType } from "../enum/ResourceType";

export class CloudResource {
  public id: string = '';
  public name: string = '';
  public title: string = 'Description';
  public resourceType: ResourceType = 0;
  public providerType: ProviderType = 0;
  public resourceConfig: Resource | undefined = new DefaultResource;
  public position = { x: 0, y: 0 };
  public shape = { width: 130, height: 40 };
  public inlets:string[] = [];
  public outlets:string[] = [];
  public inletMap: Map<string, lineCoordinates> = new Map<string, {x1:number, y1:number, x2:number, y2: number}>();
  public inletMapString: string;
  public outletMapString: string;
  public outletMap: Map<string, lineCoordinates> = new Map<string, {x1:number, y1:number, x2:number, y2: number}>();
}

export abstract class lineCoordinates {
  public x1: number = 0;
  public y1: number = 0;
  public x2: number = 0;
  public y2: number = 0;
}
export abstract class Resource {
  constructor(
    public Name: string,
    public PlatformType: string) { }
}

export class DefaultResource extends Resource {
  constructor() { super("Def", "None") }
}
