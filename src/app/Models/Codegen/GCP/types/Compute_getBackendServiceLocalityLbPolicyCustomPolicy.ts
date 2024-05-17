import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getBackendServiceLocalityLbPolicyCustomPolicy {
  /*
An optional, arbitrary JSON object with configuration data, understood
by a locally installed custom policy implementation.
*/
  Data?: string;

  /*
The name of the Backend Service.

- - -
*/
  Name?: string;
}

export function Compute_getBackendServiceLocalityLbPolicyCustomPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Data",
      "An optional, arbitrary JSON object with configuration data, understood\nby a locally installed custom policy implementation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Backend Service.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
