import { InputType } from '../enum/InputType';
import { ResourceType } from '../enum/ResourceType';

export class CloudResource {
  public name: string = '';
  public resourceType: ResourceType = 0;
  public linkedToResources: CloudResource[] = [];
  public linkedFromResources: CloudResource[] = [];
  public configuration: Map<string, InputType> = new Map();
  public position = {x: 0, y: 0};
}
