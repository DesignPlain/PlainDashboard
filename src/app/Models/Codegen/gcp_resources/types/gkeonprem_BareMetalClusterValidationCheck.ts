import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterValidationCheckStatus,
  gkeonprem_BareMetalClusterValidationCheckStatus_GetTypes,
} from "./gkeonprem_BareMetalClusterValidationCheckStatus";

export interface gkeonprem_BareMetalClusterValidationCheck {
  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  statuses?: Array<gkeonprem_BareMetalClusterValidationCheckStatus>;

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
}

export function gkeonprem_BareMetalClusterValidationCheck_GetTypes(): DynamicUIProps[] {
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
      gkeonprem_BareMetalClusterValidationCheckStatus_GetTypes(),
      false,
      false,
    ),
  ];
}
