import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterValidationCheckStatusResult,
  Gkeonprem_BareMetalAdminClusterValidationCheckStatusResult_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterValidationCheckStatusResult";

export interface Gkeonprem_BareMetalAdminClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  Results?: Array<Gkeonprem_BareMetalAdminClusterValidationCheckStatusResult>;
}

export function Gkeonprem_BareMetalAdminClusterValidationCheckStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Results",
      "(Output)\nIndividual checks which failed as part of the Preflight check execution.\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterValidationCheckStatusResult_GetTypes(),
      false,
      false,
    ),
  ];
}
