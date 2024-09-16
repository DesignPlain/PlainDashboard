import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_FleetOnDemandOptionsCapacityReservationOptions,
  ec2_FleetOnDemandOptionsCapacityReservationOptions_GetTypes,
} from './ec2_FleetOnDemandOptionsCapacityReservationOptions';

export interface ec2_FleetOnDemandOptions {
  // The strategy for using unused Capacity Reservations for fulfilling On-Demand capacity. Supported only for fleets of type `instant`.
  capacityReservationOptions?: ec2_FleetOnDemandOptionsCapacityReservationOptions;

  // The maximum amount per hour for On-Demand Instances that you're willing to pay.
  maxTotalPrice?: string;

  /*
The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is not reached, the fleet launches no instances. Supported only for fleets of type `instant`.
If you specify `min_target_capacity`, at least one of the following must be specified: `single_availability_zone` or `single_instance_type`.
*/
  minTargetCapacity?: number;

  // Indicates that the fleet launches all On-Demand Instances into a single Availability Zone. Supported only for fleets of type `instant`.
  singleAvailabilityZone?: boolean;

  // Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the fleet. Supported only for fleets of type `instant`.
  singleInstanceType?: boolean;

  // The order of the launch template overrides to use in fulfilling On-Demand capacity. Valid values: `lowestPrice`, `prioritized`. Default: `lowestPrice`.
  allocationStrategy?: string;
}

export function ec2_FleetOnDemandOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'capacityReservationOptions',
      'The strategy for using unused Capacity Reservations for fulfilling On-Demand capacity. Supported only for fleets of type `instant`.',
      () => ec2_FleetOnDemandOptionsCapacityReservationOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'maxTotalPrice',
      "The maximum amount per hour for On-Demand Instances that you're willing to pay.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minTargetCapacity',
      'The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is not reached, the fleet launches no instances. Supported only for fleets of type `instant`.\nIf you specify `min_target_capacity`, at least one of the following must be specified: `single_availability_zone` or `single_instance_type`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'singleAvailabilityZone',
      'Indicates that the fleet launches all On-Demand Instances into a single Availability Zone. Supported only for fleets of type `instant`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'singleInstanceType',
      'Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the fleet. Supported only for fleets of type `instant`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'allocationStrategy',
      'The order of the launch template overrides to use in fulfilling On-Demand capacity. Valid values: `lowestPrice`, `prioritized`. Default: `lowestPrice`.',
      () => [],
      false,
      true,
    ),
  ];
}
