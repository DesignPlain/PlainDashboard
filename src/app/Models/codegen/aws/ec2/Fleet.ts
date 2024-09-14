import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_FleetFleetInstanceSet,
  ec2_FleetFleetInstanceSet_GetTypes,
} from "../types/ec2_FleetFleetInstanceSet";
import {
  ec2_FleetOnDemandOptions,
  ec2_FleetOnDemandOptions_GetTypes,
} from "../types/ec2_FleetOnDemandOptions";
import {
  ec2_FleetTargetCapacitySpecification,
  ec2_FleetTargetCapacitySpecification_GetTypes,
} from "../types/ec2_FleetTargetCapacitySpecification";
import {
  ec2_FleetLaunchTemplateConfig,
  ec2_FleetLaunchTemplateConfig_GetTypes,
} from "../types/ec2_FleetLaunchTemplateConfig";
import {
  ec2_FleetSpotOptions,
  ec2_FleetSpotOptions_GetTypes,
} from "../types/ec2_FleetSpotOptions";

export interface FleetArgs {
  // Information about the instances that were launched by the fleet. Available only when `type` is set to `instant`.
  fleetInstanceSets?: Array<ec2_FleetFleetInstanceSet>;

  // Nested argument containing On-Demand configurations. Defined below.
  onDemandOptions?: ec2_FleetOnDemandOptions;

  // Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`. Supported only for fleets of type `maintain`.
  replaceUnhealthyInstances?: boolean;

  // The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.
  validUntil?: string;

  // Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`. Supported only for fleets of type `maintain`.
  excessCapacityTerminationPolicy?: string;

  // The state of the EC2 Fleet.
  fleetState?: string;

  // The number of units fulfilled by this request compared to the set target On-Demand capacity.
  fulfilledOnDemandCapacity?: number;

  // The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`, `instant`. Defaults to `maintain`.
  type?: string;

  // The number of units fulfilled by this request compared to the set target capacity.
  fulfilledCapacity?: number;

  // Nested argument containing target capacity configurations. Defined below.
  targetCapacitySpecification?: ec2_FleetTargetCapacitySpecification;

  // Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`.
  terminateInstancesWithExpiration?: boolean;

  // Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`.
  terminateInstances?: boolean;

  // The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
  validFrom?: string;

  // Reserved.
  context?: string;

  // Nested argument containing EC2 Launch Template configurations. Defined below.
  launchTemplateConfigs?: Array<ec2_FleetLaunchTemplateConfig>;

  // Nested argument containing Spot configurations. Defined below.
  spotOptions?: ec2_FleetSpotOptions;
}
export class Fleet extends DS_Resource {
  // Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`. Supported only for fleets of type `maintain`.
  public excessCapacityTerminationPolicy?: string;

  // The state of the EC2 Fleet.
  public fleetState?: string;

  // Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`. Supported only for fleets of type `maintain`.
  public replaceUnhealthyInstances?: boolean;

  // The ARN of the fleet
  public arn?: string;

  // Reserved.
  public context?: string;

  // The number of units fulfilled by this request compared to the set target capacity.
  public fulfilledCapacity?: number;

  // Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`.
  public terminateInstancesWithExpiration?: boolean;

  // Nested argument containing On-Demand configurations. Defined below.
  public onDemandOptions?: ec2_FleetOnDemandOptions;

  // Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`.
  public terminateInstances?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Nested argument containing target capacity configurations. Defined below.
  public targetCapacitySpecification?: ec2_FleetTargetCapacitySpecification;

  // The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`, `instant`. Defaults to `maintain`.
  public type?: string;

  // Information about the instances that were launched by the fleet. Available only when `type` is set to `instant`.
  public fleetInstanceSets?: Array<ec2_FleetFleetInstanceSet>;

  // The number of units fulfilled by this request compared to the set target On-Demand capacity.
  public fulfilledOnDemandCapacity?: number;

  // Nested argument containing EC2 Launch Template configurations. Defined below.
  public launchTemplateConfigs?: Array<ec2_FleetLaunchTemplateConfig>;

  // Nested argument containing Spot configurations. Defined below.
  public spotOptions?: ec2_FleetSpotOptions;

  // Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
  public validFrom?: string;

  // The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.
  public validUntil?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "terminateInstancesWithExpiration",
        "Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "validFrom",
        "The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "context",
        "Reserved.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "fleetInstanceSets",
        "Information about the instances that were launched by the fleet. Available only when `type` is set to `instant`.",
        () => ec2_FleetFleetInstanceSet_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`, `instant`. Defaults to `maintain`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "launchTemplateConfigs",
        "Nested argument containing EC2 Launch Template configurations. Defined below.",
        () => ec2_FleetLaunchTemplateConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "onDemandOptions",
        "Nested argument containing On-Demand configurations. Defined below.",
        () => ec2_FleetOnDemandOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fleetState",
        "The state of the EC2 Fleet.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "terminateInstances",
        "Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spotOptions",
        "Nested argument containing Spot configurations. Defined below.",
        () => ec2_FleetSpotOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "replaceUnhealthyInstances",
        "Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`. Supported only for fleets of type `maintain`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "validUntil",
        "The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "excessCapacityTerminationPolicy",
        "Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`. Supported only for fleets of type `maintain`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "fulfilledOnDemandCapacity",
        "The number of units fulfilled by this request compared to the set target On-Demand capacity.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "fulfilledCapacity",
        "The number of units fulfilled by this request compared to the set target capacity.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "targetCapacitySpecification",
        "Nested argument containing target capacity configurations. Defined below.",
        () => ec2_FleetTargetCapacitySpecification_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
