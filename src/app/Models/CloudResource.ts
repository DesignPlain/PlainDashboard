import { ProviderType, ResourceType } from "../enum/ResourceType";

export class CloudResource {
  public name: string = '';
  public title: string = 'Description';
  public resourceType: ResourceType = 0;
  public providerType: ProviderType = 0;
  public resourceConfig: Resource | undefined = new DefaultResource;
  public position = { x: 0, y: 0 };
  public shape = { width: 130, height: 40 };
}

export abstract class Resource {
  constructor(
    public Name: string,
    public PlatformType: string) { }
}

export class DefaultResource extends Resource {
  constructor() { super("Def", "None") }
}