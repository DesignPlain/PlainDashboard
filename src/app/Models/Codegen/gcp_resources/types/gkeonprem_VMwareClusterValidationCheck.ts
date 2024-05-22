import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_VMwareClusterValidationCheckStatus,
  gkeonprem_VMwareClusterValidationCheckStatus_GetTypes,
} from "./gkeonprem_VMwareClusterValidationCheckStatus";

export interface gkeonprem_VMwareClusterValidationCheck {
  /*
(Output)
Options used for the validation check.
*/
  options?: string;

  /*
(Output)
The scenario when the preflight checks were run..
*/
  scenario?: string;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  statuses?: Array<gkeonprem_VMwareClusterValidationCheckStatus>;
}

export function gkeonprem_VMwareClusterValidationCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "options",
      "(Output)\nOptions used for the validation check.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scenario",
      "(Output)\nThe scenario when the preflight checks were run..",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statuses",
      "(Output)\nSpecifies the detailed validation check status\nStructure is documented below.",
      gkeonprem_VMwareClusterValidationCheckStatus_GetTypes(),
      false,
      false,
    ),
  ];
}
