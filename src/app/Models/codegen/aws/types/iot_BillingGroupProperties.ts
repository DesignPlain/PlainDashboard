import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_BillingGroupProperties {
  // A description of the Billing Group.
  description?: string;
}

export function iot_BillingGroupProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'A description of the Billing Group.',
      () => [],
      false,
      false,
    ),
  ];
}
