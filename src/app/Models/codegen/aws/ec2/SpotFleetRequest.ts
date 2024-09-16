import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_SpotFleetRequestSpotMaintenanceStrategies,
  ec2_SpotFleetRequestSpotMaintenanceStrategies_GetTypes,
} from '../types/ec2_SpotFleetRequestSpotMaintenanceStrategies';
import {
  ec2_SpotFleetRequestLaunchTemplateConfig,
  ec2_SpotFleetRequestLaunchTemplateConfig_GetTypes,
} from '../types/ec2_SpotFleetRequestLaunchTemplateConfig';
import {
  ec2_SpotFleetRequestLaunchSpecification,
  ec2_SpotFleetRequestLaunchSpecification_GetTypes,
} from '../types/ec2_SpotFleetRequestLaunchSpecification';

export interface SpotFleetRequestArgs {
  // The maximum amount per hour for On-Demand Instances that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity.
  onDemandMaxTotalPrice?: string;

  // Indicates whether Spot fleet should replace unhealthy instances. Default `false`.
  replaceUnhealthyInstances?: boolean;

  // A list of `aws.alb.TargetGroup` ARNs, for use with Application Load Balancing.
  targetGroupArns?: Array<string>;

  /*
Indicates whether running Spot
instances should be terminated when the Spot fleet request expires.
*/
  terminateInstancesWithExpiration?: boolean;

  /*
Indicates whether a Spot
instance stops or terminates when it is interrupted. Default is
`terminate`.
*/
  instanceInterruptionBehaviour?: string;

  /*
Grants the Spot fleet permission to terminate
Spot instances on your behalf when you cancel its Spot fleet request using
CancelSpotFleetRequests or when the Spot fleet request expires, if you set
terminateInstancesWithExpiration.
*/
  iamFleetRole?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
If set, this provider will
wait for the Spot Request to be fulfilled, and will throw an error if the
timeout of 10m is reached.
*/
  waitForFulfillment?: boolean;

  // Reserved.
  context?: string;

  /*
The number of Spot pools across which to allocate your target Spot capacity.
Valid only when `allocation_strategy` is set to `lowestPrice`. Spot Fleet selects
the cheapest Spot pools and evenly allocates your target Spot capacity across
the number of Spot pools that you specify.
*/
  instancePoolsToUseCount?: number;

  // Launch template configuration block. See Launch Template Configs below for more details. Conflicts with `launch_specification`. At least one of `launch_specification` or `launch_template_config` is required.
  launchTemplateConfigs?: Array<ec2_SpotFleetRequestLaunchTemplateConfig>;

  // A list of elastic load balancer names to add to the Spot fleet.
  loadBalancers?: Array<string>;

  // The number of On-Demand units to request. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.
  onDemandTargetCapacity?: number;

  /*
The number of units to request. You can choose to set the
target capacity in terms of instances or a performance characteristic that is
important to your application workload, such as vCPUs, memory, or I/O.
*/
  targetCapacity?: number;

  /*
Indicates whether running Spot
instances should be terminated when the resource is deleted (and the Spot fleet request cancelled).
If no value is specified, the value of the `terminate_instances_with_expiration` argument is used.
*/
  terminateInstancesOnDelete?: string;

  // The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
  validFrom?: string;

  /*
The type of fleet request. Indicates whether the Spot Fleet only requests the target
capacity or also attempts to maintain it. Default is `maintain`.
*/
  fleetType?: string;

  // The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request.
  validUntil?: string;

  /*
Indicates whether running Spot
instances should be terminated if the target capacity of the Spot fleet
request is decreased below the current size of the Spot fleet.
*/
  excessCapacityTerminationPolicy?: string;

  /*
Used to define the launch configuration of the
spot-fleet request. Can be specified multiple times to define different bids
across different markets and instance types. Conflicts with `launch_template_config`. At least one of `launch_specification` or `launch_template_config` is required.

--Note--: This takes in similar but not
identical inputs as `aws.ec2.Instance`.  There are limitations on
what you can specify. See the list of officially supported inputs in the
[reference documentation](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetLaunchSpecification.html). Any normal `aws.ec2.Instance` parameter that corresponds to those inputs may be used and it have
a additional parameter `iam_instance_profile_arn` takes `aws.iam.InstanceProfile` attribute `arn` as input.
*/
  launchSpecifications?: Array<ec2_SpotFleetRequestLaunchSpecification>;

  // The order of the launch template overrides to use in fulfilling On-Demand capacity. the possible values are: `lowestPrice` and `prioritized`. the default is `lowestPrice`.
  onDemandAllocationStrategy?: string;

  // Nested argument containing maintenance strategies for managing your Spot Instances that are at an elevated risk of being interrupted. Defined below.
  spotMaintenanceStrategies?: ec2_SpotFleetRequestSpotMaintenanceStrategies;

  // The maximum bid price per unit hour.
  spotPrice?: string;

  // The unit for the target capacity. This can only be done with `instance_requirements` defined
  targetCapacityUnitType?: string;

  /*
Indicates how to allocate the target capacity across
the Spot pools specified by the Spot fleet request. Valid values: `lowestPrice`, `diversified`, `capacityOptimized`, `capacityOptimizedPrioritized`, and `priceCapacityOptimized`. The default is
`lowestPrice`.
*/
  allocationStrategy?: string;
}
export class SpotFleetRequest extends DS_Resource {
  /*
Indicates how to allocate the target capacity across
the Spot pools specified by the Spot fleet request. Valid values: `lowestPrice`, `diversified`, `capacityOptimized`, `capacityOptimizedPrioritized`, and `priceCapacityOptimized`. The default is
`lowestPrice`.
*/
  public allocationStrategy?: string;

  //
  public clientToken?: string;

  // A list of elastic load balancer names to add to the Spot fleet.
  public loadBalancers?: Array<string>;

  // The maximum amount per hour for On-Demand Instances that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity.
  public onDemandMaxTotalPrice?: string;

  // Nested argument containing maintenance strategies for managing your Spot Instances that are at an elevated risk of being interrupted. Defined below.
  public spotMaintenanceStrategies?: ec2_SpotFleetRequestSpotMaintenanceStrategies;

  // A list of `aws.alb.TargetGroup` ARNs, for use with Application Load Balancing.
  public targetGroupArns?: Array<string>;

  /*
The type of fleet request. Indicates whether the Spot Fleet only requests the target
capacity or also attempts to maintain it. Default is `maintain`.
*/
  public fleetType?: string;

  // Reserved.
  public context?: string;

  /*
The number of Spot pools across which to allocate your target Spot capacity.
Valid only when `allocation_strategy` is set to `lowestPrice`. Spot Fleet selects
the cheapest Spot pools and evenly allocates your target Spot capacity across
the number of Spot pools that you specify.
*/
  public instancePoolsToUseCount?: number;

  /*
Indicates whether running Spot
instances should be terminated when the resource is deleted (and the Spot fleet request cancelled).
If no value is specified, the value of the `terminate_instances_with_expiration` argument is used.
*/
  public terminateInstancesOnDelete?: string;

  // Launch template configuration block. See Launch Template Configs below for more details. Conflicts with `launch_specification`. At least one of `launch_specification` or `launch_template_config` is required.
  public launchTemplateConfigs?: Array<ec2_SpotFleetRequestLaunchTemplateConfig>;

  // The state of the Spot fleet request.
  public spotRequestState?: string;

  /*
Indicates whether running Spot
instances should be terminated when the Spot fleet request expires.
*/
  public terminateInstancesWithExpiration?: boolean;

  /*
If set, this provider will
wait for the Spot Request to be fulfilled, and will throw an error if the
timeout of 10m is reached.
*/
  public waitForFulfillment?: boolean;

  /*
Indicates whether running Spot
instances should be terminated if the target capacity of the Spot fleet
request is decreased below the current size of the Spot fleet.
*/
  public excessCapacityTerminationPolicy?: string;

  /*
Grants the Spot fleet permission to terminate
Spot instances on your behalf when you cancel its Spot fleet request using
CancelSpotFleetRequests or when the Spot fleet request expires, if you set
terminateInstancesWithExpiration.
*/
  public iamFleetRole?: string;

  /*
Used to define the launch configuration of the
spot-fleet request. Can be specified multiple times to define different bids
across different markets and instance types. Conflicts with `launch_template_config`. At least one of `launch_specification` or `launch_template_config` is required.

--Note--: This takes in similar but not
identical inputs as `aws.ec2.Instance`.  There are limitations on
what you can specify. See the list of officially supported inputs in the
[reference documentation](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetLaunchSpecification.html). Any normal `aws.ec2.Instance` parameter that corresponds to those inputs may be used and it have
a additional parameter `iam_instance_profile_arn` takes `aws.iam.InstanceProfile` attribute `arn` as input.
*/
  public launchSpecifications?: Array<ec2_SpotFleetRequestLaunchSpecification>;

  /*
The number of units to request. You can choose to set the
target capacity in terms of instances or a performance characteristic that is
important to your application workload, such as vCPUs, memory, or I/O.
*/
  public targetCapacity?: number;

  // The unit for the target capacity. This can only be done with `instance_requirements` defined
  public targetCapacityUnitType?: string;

  // The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request.
  public validUntil?: string;

  // The order of the launch template overrides to use in fulfilling On-Demand capacity. the possible values are: `lowestPrice` and `prioritized`. the default is `lowestPrice`.
  public onDemandAllocationStrategy?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Indicates whether Spot fleet should replace unhealthy instances. Default `false`.
  public replaceUnhealthyInstances?: boolean;

  /*
Indicates whether a Spot
instance stops or terminates when it is interrupted. Default is
`terminate`.
*/
  public instanceInterruptionBehaviour?: string;

  // The number of On-Demand units to request. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.
  public onDemandTargetCapacity?: number;

  // The maximum bid price per unit hour.
  public spotPrice?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
  public validFrom?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'waitForFulfillment',
        'If set, this provider will\nwait for the Spot Request to be fulfilled, and will throw an error if the\ntimeout of 10m is reached.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'onDemandTargetCapacity',
        'The number of On-Demand units to request. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'fleetType',
        'The type of fleet request. Indicates whether the Spot Fleet only requests the target\ncapacity or also attempts to maintain it. Default is `maintain`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'onDemandAllocationStrategy',
        'The order of the launch template overrides to use in fulfilling On-Demand capacity. the possible values are: `lowestPrice` and `prioritized`. the default is `lowestPrice`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'spotMaintenanceStrategies',
        'Nested argument containing maintenance strategies for managing your Spot Instances that are at an elevated risk of being interrupted. Defined below.',
        () => ec2_SpotFleetRequestSpotMaintenanceStrategies_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'iamFleetRole',
        'Grants the Spot fleet permission to terminate\nSpot instances on your behalf when you cancel its Spot fleet request using\nCancelSpotFleetRequests or when the Spot fleet request expires, if you set\nterminateInstancesWithExpiration.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'replaceUnhealthyInstances',
        'Indicates whether Spot fleet should replace unhealthy instances. Default `false`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'instancePoolsToUseCount',
        'The number of Spot pools across which to allocate your target Spot capacity.\nValid only when `allocation_strategy` is set to `lowestPrice`. Spot Fleet selects\nthe cheapest Spot pools and evenly allocates your target Spot capacity across\nthe number of Spot pools that you specify.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'spotPrice',
        'The maximum bid price per unit hour.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'allocationStrategy',
        'Indicates how to allocate the target capacity across\nthe Spot pools specified by the Spot fleet request. Valid values: `lowestPrice`, `diversified`, `capacityOptimized`, `capacityOptimizedPrioritized`, and `priceCapacityOptimized`. The default is\n`lowestPrice`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'onDemandMaxTotalPrice',
        "The maximum amount per hour for On-Demand Instances that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'launchTemplateConfigs',
        'Launch template configuration block. See Launch Template Configs below for more details. Conflicts with `launch_specification`. At least one of `launch_specification` or `launch_template_config` is required.',
        () => ec2_SpotFleetRequestLaunchTemplateConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'loadBalancers',
        'A list of elastic load balancer names to add to the Spot fleet.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'terminateInstancesOnDelete',
        'Indicates whether running Spot\ninstances should be terminated when the resource is deleted (and the Spot fleet request cancelled).\nIf no value is specified, the value of the `terminate_instances_with_expiration` argument is used.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'validFrom',
        'The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'validUntil',
        'The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'excessCapacityTerminationPolicy',
        'Indicates whether running Spot\ninstances should be terminated if the target capacity of the Spot fleet\nrequest is decreased below the current size of the Spot fleet.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetCapacityUnitType',
        'The unit for the target capacity. This can only be done with `instance_requirements` defined',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'targetGroupArns',
        'A list of `aws.alb.TargetGroup` ARNs, for use with Application Load Balancing.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceInterruptionBehaviour',
        'Indicates whether a Spot\ninstance stops or terminates when it is interrupted. Default is\n`terminate`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'context',
        'Reserved.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'targetCapacity',
        'The number of units to request. You can choose to set the\ntarget capacity in terms of instances or a performance characteristic that is\nimportant to your application workload, such as vCPUs, memory, or I/O.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'launchSpecifications',
        'Used to define the launch configuration of the\nspot-fleet request. Can be specified multiple times to define different bids\nacross different markets and instance types. Conflicts with `launch_template_config`. At least one of `launch_specification` or `launch_template_config` is required.\n\n**Note**: This takes in similar but not\nidentical inputs as `aws.ec2.Instance`.  There are limitations on\nwhat you can specify. See the list of officially supported inputs in the\n[reference documentation](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetLaunchSpecification.html). Any normal `aws.ec2.Instance` parameter that corresponds to those inputs may be used and it have\na additional parameter `iam_instance_profile_arn` takes `aws.iam.InstanceProfile` attribute `arn` as input.',
        () => ec2_SpotFleetRequestLaunchSpecification_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'terminateInstancesWithExpiration',
        'Indicates whether running Spot\ninstances should be terminated when the Spot fleet request expires.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
