import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getBackendServiceLocalityLbPolicyCustomPolicy {
  /*
An optional, arbitrary JSON object with configuration data, understood
by a locally installed custom policy implementation.
*/
  data?: string;

  /*
The name of the Backend Service.

- - -
*/
  name?: string;
}

export function compute_getBackendServiceLocalityLbPolicyCustomPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'data',
      'An optional, arbitrary JSON object with configuration data, understood\nby a locally installed custom policy implementation.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the Backend Service.\n\n- - -',
      () => [],
      true,
      false,
    ),
  ];
}
