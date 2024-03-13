import { InputType } from '../enum/InputType';
import { ResourceType } from '../enum/ResourceType';
import { Resource } from './CloudResource';

// TODO: Currently the class member name and the UI display name is same, we need to change the logic \
//       so that we can have space in display name. Might need some changes related to the dynamic    \
//       input field rendering logic
export class ResourceProperties {
  public static propertiesMap: Map<ResourceType, Map<string, InputType>> =
    new Map([
      [
        ResourceType.EC2,
        new Map([
          ['Hostname', InputType.String],
          ['MachineType', InputType.DropDown],
          ['vCPU', InputType.Number],
          ['Memory', InputType.Number],
          ['BootDiskImage', InputType.String],
          ['Network', InputType.DropDown],
          ['SubNetwork', InputType.DropDown],
          ['Zone', InputType.DropDown],
          ['MetadataStartupScript', InputType.String],
          ['ServiceAccountEmail', InputType.DropDown],
          ['ServiceAccountScope', InputType.String],
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
          ['Role', InputType.DropDown],
          ['Members', InputType.String],
        ]),
      ],
      [
        ResourceType.Virtual_Private_Cloud,
        new Map([
          ['AutoCreateSubNetwork', InputType.CheckBox],
          ['RoutingMode', InputType.DropDown],
          ['MTU', InputType.Number],
          ['DeleteDefaultRoutesOnCreate', InputType.CheckBox],
          ['NetworkFirewallPolicyEnforcementOrder', InputType.String],
        ]),
      ],
      [
        ResourceType.Subnet,
        new Map([
          ['IpCidrRange', InputType.String],
          ['Region', InputType.String],
          ['Purpose', InputType.String],
          ['Network', InputType.String],
        ]),
      ],
    ]);
}

export class GCP_StorageBucket extends Resource {
  constructor(
    public Location: string,
    public UniformBucketLevelAccess: boolean,
    public Role: string,
    public Members: string[]
  ) {
    super('StorageBucket', 'GCP');
  }
}

export class GCP_ComputeEngine extends Resource {
  constructor(
    public Hostname: string,
    public MachineType: string,
    public vCPU: number,
    public Memory: number,
    public BootDiskImage: string,
    public Network: string,
    public SubNetwork: string,
    public Zone: string,
    public MetadataStartupScript: string,
    public ServiceAccountEmail: string,
    public ServiceAccountScope: string
  ) {
    super('ComputeEngine', 'GCP');
  }
}

export class GCP_VPCNetwork extends Resource {
  constructor(
    public AutoCreateSubNetwork: boolean,
    public RoutingMode: string,
    public MTU: number,
    public DeleteDefaultRoutesOnCreate: boolean,
    public NetworkFirewallPolicyEnforcementOrder: string
  ) {
    super('VPC', 'GCP');
  }
}

export class GCP_SubNetwork extends Resource {
  constructor(
    public IpCidrRange: string,
    public Region: string,
    public Purpose: string,
    public Network: string
  ) {
    super('Subnet', 'GCP');
  }
}
