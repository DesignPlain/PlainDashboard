import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_BackendServiceLocalityLbPolicyPolicy {
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
  Name?: string;
}

export function Compute_BackendServiceLocalityLbPolicyPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of a locality load balancer policy to be used. The value\nshould be one of the predefined ones as supported by localityLbPolicy,\nalthough at the moment only ROUND_ROBIN is supported.\nThis field should only be populated when the customPolicy field is not\nused.\nNote that specifying the same policy more than once for a backend is\nnot a valid configuration and will be rejected.\nThe possible values are:",
      [],
      true,
      false,
    ),
  ];
}
