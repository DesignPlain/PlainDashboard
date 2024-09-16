import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_BackendServiceLocalityLbPolicyPolicy {
  /*
The name of a locality load balancer policy to be used. The value
should be one of the predefined ones as supported by localityLbPolicy,
although at the moment only ROUND_ROBIN is supported.
This field should only be populated when the customPolicy field is not
used.
Note that specifying the same policy more than once for a backend is
not a valid configuration and will be rejected.
The possible values are:
*/
  name?: string;
}

export function compute_BackendServiceLocalityLbPolicyPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of a locality load balancer policy to be used. The value\nshould be one of the predefined ones as supported by localityLbPolicy,\nalthough at the moment only ROUND_ROBIN is supported.\nThis field should only be populated when the customPolicy field is not\nused.\nNote that specifying the same policy more than once for a backend is\nnot a valid configuration and will be rejected.\nThe possible values are:',
      () => [],
      true,
      false,
    ),
  ];
}
