import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterValidationCheckStatus,
  Gkeonprem_VMwareClusterValidationCheckStatus_GetTypes,
} from "./Gkeonprem_VMwareClusterValidationCheckStatus";

export interface Gkeonprem_VMwareClusterValidationCheck {
  /*
(Output)
Options used for the validation check.
*/
  Options?: string;

  /*
(Output)
The scenario when the preflight checks were run..
*/
  Scenario?: string;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  Statuses?: Array<Gkeonprem_VMwareClusterValidationCheckStatus>;
}

export function Gkeonprem_VMwareClusterValidationCheck_GetTypes(): DynamicUIProps[] {
  return [
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
      "Scenario",
      "(Output)\nThe scenario when the preflight checks were run..",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Statuses",
      "(Output)\nSpecifies the detailed validation check status\nStructure is documented below.",
      Gkeonprem_VMwareClusterValidationCheckStatus_GetTypes(),
      false,
      false,
    ),
  ];
}
