import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterValidationCheckStatusResult {
  /*
(Output)
The category of the validation.
*/
  Category?: string;

  // A human readable description of this VMware User Cluster.
  Description?: string;

  /*
(Output)
Detailed failure information, which might be unformatted.
*/
  Details?: string;

  /*
(Output)
Options used for the validation check.
*/
  Options?: string;

  /*
(Output)
Machine-readable message indicating details about last transition.
*/
  Reason?: string;
}

export function Gkeonprem_VMwareClusterValidationCheckStatusResult_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Category",
      "(Output)\nThe category of the validation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A human readable description of this VMware User Cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Details",
      "(Output)\nDetailed failure information, which might be unformatted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Options",
      "(Output)\nOptions used for the validation check.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Reason",
      "(Output)\nMachine-readable message indicating details about last transition.",
      [],
      false,
      false,
    ),
  ];
}
