import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterValidationCheckStatusResult,
  Gkeonprem_VMwareClusterValidationCheckStatusResult_GetTypes,
} from "./Gkeonprem_VMwareClusterValidationCheckStatusResult";

export interface Gkeonprem_VMwareClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  Results?: Array<Gkeonprem_VMwareClusterValidationCheckStatusResult>;
}

export function Gkeonprem_VMwareClusterValidationCheckStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Results",
      "(Output)\nIndividual checks which failed as part of the Preflight check execution.\nStructure is documented below.",
      Gkeonprem_VMwareClusterValidationCheckStatusResult_GetTypes(),
      false,
      false,
    ),
  ];
}
