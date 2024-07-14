import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gamelift_FleetResourceCreationLimitPolicy,
  gamelift_FleetResourceCreationLimitPolicy_GetTypes,
} from "../types/gamelift_FleetResourceCreationLimitPolicy";
import {
  gamelift_FleetRuntimeConfiguration,
  gamelift_FleetRuntimeConfiguration_GetTypes,
} from "../types/gamelift_FleetRuntimeConfiguration";
import {
  gamelift_FleetCertificateConfiguration,
  gamelift_FleetCertificateConfiguration_GetTypes,
} from "../types/gamelift_FleetCertificateConfiguration";
import {
  gamelift_FleetEc2InboundPermission,
  gamelift_FleetEc2InboundPermission_GetTypes,
} from "../types/gamelift_FleetEc2InboundPermission";

export interface FleetArgs {
  // Policy that limits the number of game sessions an individual player can create over a span of time for this fleet. See below.
  resourceCreationLimitPolicy?: gamelift_FleetResourceCreationLimitPolicy;

  // Instructions for launching server processes on each instance in the fleet. See below.
  runtimeConfiguration?: gamelift_FleetRuntimeConfiguration;

  // ID of the GameLift Script to be deployed on the fleet.
  scriptId?: string;

  // Name of an EC2 instance typeE.g., `t2.micro`
  ec2InstanceType?: string;

  // List of names of metric groups to add this fleet to. A metric group tracks metrics across all fleets in the group. Defaults to `default`.
  metricGroups?: Array<string>;

  // The name of the fleet.
  name?: string;

  // Human-readable description of the fleet.
  description?: string;

  // Game session protection policy to apply to all instances in this fleetE.g., `FullProtection`. Defaults to `NoProtection`.
  newGameSessionProtectionPolicy?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Prompts GameLift to generate a TLS/SSL certificate for the fleet. See certificate_configuration.
  certificateConfiguration?: gamelift_FleetCertificateConfiguration;

  // Range of IP addresses and port settings that permit inbound traffic to access server processes running on the fleet. See below.
  ec2InboundPermissions?: Array<gamelift_FleetEc2InboundPermission>;

  // ARN of an IAM role that instances in the fleet can assume.
  instanceRoleArn?: string;

  // ID of the GameLift Build to be deployed on the fleet.
  buildId?: string;

  // Type of fleet. This value must be `ON_DEMAND` or `SPOT`. Defaults to `ON_DEMAND`.
  fleetType?: string;
}
export class Fleet extends Resource {
  // Range of IP addresses and port settings that permit inbound traffic to access server processes running on the fleet. See below.
  public ec2InboundPermissions?: Array<gamelift_FleetEc2InboundPermission>;

  // Name of an EC2 instance typeE.g., `t2.micro`
  public ec2InstanceType?: string;

  // ARN of an IAM role that instances in the fleet can assume.
  public instanceRoleArn?: string;

  // ID of the GameLift Script to be deployed on the fleet.
  public scriptId?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Prompts GameLift to generate a TLS/SSL certificate for the fleet. See certificate_configuration.
  public certificateConfiguration?: gamelift_FleetCertificateConfiguration;

  // Type of fleet. This value must be `ON_DEMAND` or `SPOT`. Defaults to `ON_DEMAND`.
  public fleetType?: string;

  // List of names of metric groups to add this fleet to. A metric group tracks metrics across all fleets in the group. Defaults to `default`.
  public metricGroups?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Build ARN.
  public buildArn?: string;

  // Human-readable description of the fleet.
  public description?: string;

  // The name of the fleet.
  public name?: string;

  // Operating system of the fleet's computing resources.
  public operatingSystem?: string;

  // Policy that limits the number of game sessions an individual player can create over a span of time for this fleet. See below.
  public resourceCreationLimitPolicy?: gamelift_FleetResourceCreationLimitPolicy;

  // Script ARN.
  public scriptArn?: string;

  // Fleet ARN.
  public arn?: string;

  // ID of the GameLift Build to be deployed on the fleet.
  public buildId?: string;

  //
  public logPaths?: Array<string>;

  // Game session protection policy to apply to all instances in this fleetE.g., `FullProtection`. Defaults to `NoProtection`.
  public newGameSessionProtectionPolicy?: string;

  // Instructions for launching server processes on each instance in the fleet. See below.
  public runtimeConfiguration?: gamelift_FleetRuntimeConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the fleet.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "newGameSessionProtectionPolicy",
        "Game session protection policy to apply to all instances in this fleetE.g., `FullProtection`. Defaults to `NoProtection`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "certificateConfiguration",
        "Prompts GameLift to generate a TLS/SSL certificate for the fleet. See certificate_configuration.",
        gamelift_FleetCertificateConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fleetType",
        "Type of fleet. This value must be `ON_DEMAND` or `SPOT`. Defaults to `ON_DEMAND`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ec2InboundPermissions",
        "Range of IP addresses and port settings that permit inbound traffic to access server processes running on the fleet. See below.",
        gamelift_FleetEc2InboundPermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "buildId",
        "ID of the GameLift Build to be deployed on the fleet.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "resourceCreationLimitPolicy",
        "Policy that limits the number of game sessions an individual player can create over a span of time for this fleet. See below.",
        gamelift_FleetResourceCreationLimitPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Human-readable description of the fleet.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceRoleArn",
        "ARN of an IAM role that instances in the fleet can assume.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "runtimeConfiguration",
        "Instructions for launching server processes on each instance in the fleet. See below.",
        gamelift_FleetRuntimeConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scriptId",
        "ID of the GameLift Script to be deployed on the fleet.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ec2InstanceType",
        "Name of an EC2 instance typeE.g., `t2.micro`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "metricGroups",
        "List of names of metric groups to add this fleet to. A metric group tracks metrics across all fleets in the group. Defaults to `default`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
