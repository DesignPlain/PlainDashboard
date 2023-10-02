import { InputType } from '../enum/InputType';
import { ResourceType } from '../enum/ResourceType';
import { Resource } from './CloudResource';

export class ResourceProperties {
  public static propertiesMap: Map<ResourceType, Map<string, InputType>> =
    new Map([
      [
        ResourceType.EC2,
        new Map([
          ['Family', InputType.String],
          ['InstanceType', InputType.String],
          ['vCPU', InputType.Number],
          ['Memory', InputType.Number],
          ['Support_IPv6', InputType.CheckBox],
          ['EnableSSH', InputType.CheckBox],
          ['Role', InputType.String],
          ['Members', InputType.String],
        ]),
      ],
      [
        ResourceType.Elastic_Load_Balancer,
        new Map([
          ['IP', InputType.String],
          ['Code', InputType.String],
        ]),
      ],
      [
        ResourceType.Simple_Storage_Service,
        new Map([
          ['Location', InputType.String],
          ['UniformBucketLevelAccess', InputType.CheckBox],
          ['Role', InputType.String],
          ['Members', InputType.String],
        ]),
      ],
    ]);
}

export class GCP_StorageBucket extends Resource {

  constructor(
    public Location: string,
    public UniformBucketLevelAccess: boolean,
    public Role: string,
    public Members: string[]) {
    super("StorageBucket", "GCP")
  }
}

export class GCP_ComputeEngine extends Resource {

  constructor(
    public Family: string,
    public InstanceType: string,
    public vCPU: number,
    public Memory: number,
    public Support_IPv6: boolean,
    public EnableSSH: boolean,
    public Role: string,
    public Members: string[]) {
    super("ComputeEngine", "GCP")
  }
}