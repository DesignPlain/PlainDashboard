import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_InstanceCapacityReservationSpecificationCapacityReservationTarget,
  ec2_InstanceCapacityReservationSpecificationCapacityReservationTarget_GetTypes,
} from './ec2_InstanceCapacityReservationSpecificationCapacityReservationTarget';

export interface ec2_InstanceCapacityReservationSpecification {
  // Indicates the instance's Capacity Reservation preferences. Can be `"open"` or `"none"`. (Default: `"open"`).
  capacityReservationPreference?: string;

  /*
Information about the target Capacity Reservation. See Capacity Reservation Target below for more details.

For more information, see the documentation on [Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-reservations-using.html).
*/
  capacityReservationTarget?: ec2_InstanceCapacityReservationSpecificationCapacityReservationTarget;
}

export function ec2_InstanceCapacityReservationSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'capacityReservationPreference',
      'Indicates the instance\'s Capacity Reservation preferences. Can be `"open"` or `"none"`. (Default: `"open"`).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'capacityReservationTarget',
      'Information about the target Capacity Reservation. See Capacity Reservation Target below for more details.\n\nFor more information, see the documentation on [Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-reservations-using.html).',
      () =>
        ec2_InstanceCapacityReservationSpecificationCapacityReservationTarget_GetTypes(),
      false,
      false,
    ),
  ];
}
