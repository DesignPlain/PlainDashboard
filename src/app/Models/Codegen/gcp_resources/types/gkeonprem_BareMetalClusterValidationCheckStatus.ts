import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterValidationCheckStatusResult,
  gkeonprem_BareMetalClusterValidationCheckStatusResult_GetTypes,
} from "./gkeonprem_BareMetalClusterValidationCheckStatusResult";

export interface gkeonprem_BareMetalClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  results?: Array<gkeonprem_BareMetalClusterValidationCheckStatusResult>;
}

export function gkeonprem_BareMetalClusterValidationCheckStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "results",
      "(Output)\nIndividual checks which failed as part of the Preflight check execution.\nStructure is documented below.",
      gkeonprem_BareMetalClusterValidationCheckStatusResult_GetTypes(),
      false,
      false,
    ),
  ];
}
