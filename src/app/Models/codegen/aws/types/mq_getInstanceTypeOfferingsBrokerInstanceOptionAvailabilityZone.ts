import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone {
  // Name of the Availability Zone.
  name?: string;
}

export function mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the Availability Zone.',
      () => [],
      true,
      false,
    ),
  ];
}
