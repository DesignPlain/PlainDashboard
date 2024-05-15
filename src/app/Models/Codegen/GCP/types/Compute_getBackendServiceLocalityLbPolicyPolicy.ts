import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getBackendServiceLocalityLbPolicyPolicy {
  /*
The name of the Backend Service.

- - -
*/
  Name?: string;
}

export function Compute_getBackendServiceLocalityLbPolicyPolicy_GetTypes(): DynamicUIProps[] {
  return [
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
