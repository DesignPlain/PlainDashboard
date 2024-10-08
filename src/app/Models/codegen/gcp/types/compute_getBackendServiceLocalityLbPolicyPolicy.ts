import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getBackendServiceLocalityLbPolicyPolicy {
  /*
The name of the Backend Service.

- - -
*/
  name?: string;
}

export function compute_getBackendServiceLocalityLbPolicyPolicy_GetTypes(): DynamicUIProps[] {
  return [
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
