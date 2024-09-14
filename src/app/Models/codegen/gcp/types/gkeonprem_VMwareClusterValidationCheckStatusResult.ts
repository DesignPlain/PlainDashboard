import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkeonprem_VMwareClusterValidationCheckStatusResult {
  /*
(Output)
The category of the validation.
*/
  category?: string;

  // A human readable description of this VMware User Cluster.
  description?: string;

  /*
(Output)
Detailed failure information, which might be unformatted.
*/
  details?: string;

  /*
(Output)
Options used for the validation check.
*/
  options?: string;

  /*
(Output)
Machine-readable message indicating details about last transition.
*/
  reason?: string;
}

export function gkeonprem_VMwareClusterValidationCheckStatusResult_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "reason",
      "(Output)\nMachine-readable message indicating details about last transition.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "category",
      "(Output)\nThe category of the validation.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A human readable description of this VMware User Cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "details",
      "(Output)\nDetailed failure information, which might be unformatted.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "options",
      "(Output)\nOptions used for the validation check.",
      () => [],
      false,
      false,
    ),
  ];
}
