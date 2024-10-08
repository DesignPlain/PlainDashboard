import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emr_ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification {
  // Specifies the strategy to use in launching Spot instance fleets. Valid values include `capacity-optimized`, `diversified`, `lowest-price`, `price-capacity-optimized`. See the [AWS documentation](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html#emr-instance-fleet-allocation-strategy) for details on each strategy type.
  allocationStrategy?: string;

  // Defined duration for Spot instances (also known as Spot blocks) in minutes. When specified, the Spot instance does not terminate before the defined duration expires, and defined duration pricing for Spot instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot instance for termination and provides a Spot instance termination notice, which gives the instance a two-minute warning before it terminates.
  blockDurationMinutes?: number;

  // Action to take when TargetSpotCapacity has not been fulfilled when the TimeoutDurationMinutes has expired; that is, when all Spot instances could not be provisioned within the Spot provisioning timeout. Valid values are `TERMINATE_CLUSTER` and `SWITCH_TO_ON_DEMAND`. SWITCH_TO_ON_DEMAND specifies that if no Spot instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.
  timeoutAction?: string;

  // Spot provisioning timeout period in minutes. If Spot instances are not provisioned within this time period, the TimeOutAction is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.
  timeoutDurationMinutes?: number;
}

export function emr_ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'allocationStrategy',
      'Specifies the strategy to use in launching Spot instance fleets. Valid values include `capacity-optimized`, `diversified`, `lowest-price`, `price-capacity-optimized`. See the [AWS documentation](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html#emr-instance-fleet-allocation-strategy) for details on each strategy type.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'blockDurationMinutes',
      'Defined duration for Spot instances (also known as Spot blocks) in minutes. When specified, the Spot instance does not terminate before the defined duration expires, and defined duration pricing for Spot instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot instance for termination and provides a Spot instance termination notice, which gives the instance a two-minute warning before it terminates.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'timeoutAction',
      'Action to take when TargetSpotCapacity has not been fulfilled when the TimeoutDurationMinutes has expired; that is, when all Spot instances could not be provisioned within the Spot provisioning timeout. Valid values are `TERMINATE_CLUSTER` and `SWITCH_TO_ON_DEMAND`. SWITCH_TO_ON_DEMAND specifies that if no Spot instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'timeoutDurationMinutes',
      'Spot provisioning timeout period in minutes. If Spot instances are not provisioned within this time period, the TimeOutAction is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.',
      () => [],
      true,
      true,
    ),
  ];
}
