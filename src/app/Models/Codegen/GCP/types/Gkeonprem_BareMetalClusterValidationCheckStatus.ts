import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterValidationCheckStatusResult,
  Gkeonprem_BareMetalClusterValidationCheckStatusResult_GetTypes,
} from "./Gkeonprem_BareMetalClusterValidationCheckStatusResult";

export interface Gkeonprem_BareMetalClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  Results?: Array<Gkeonprem_BareMetalClusterValidationCheckStatusResult>;
}

export function Gkeonprem_BareMetalClusterValidationCheckStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Results",
      "(Output)\nIndividual checks which failed as part of the Preflight check execution.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterValidationCheckStatusResult_GetTypes(),
      false,
      false,
    ),
  ];
}
