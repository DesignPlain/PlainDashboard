import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_VMwareClusterValidationCheckStatusResult,
  gkeonprem_VMwareClusterValidationCheckStatusResult_GetTypes,
} from "./gkeonprem_VMwareClusterValidationCheckStatusResult";

export interface gkeonprem_VMwareClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  results?: Array<gkeonprem_VMwareClusterValidationCheckStatusResult>;
}

export function gkeonprem_VMwareClusterValidationCheckStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "results",
      "(Output)\nIndividual checks which failed as part of the Preflight check execution.\nStructure is documented below.",
      gkeonprem_VMwareClusterValidationCheckStatusResult_GetTypes(),
      false,
      false,
    ),
  ];
}
