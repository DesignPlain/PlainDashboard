import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterStatusCondition,
  Gkeonprem_BareMetalClusterStatusCondition_GetTypes,
} from "./Gkeonprem_BareMetalClusterStatusCondition";

export interface Gkeonprem_BareMetalClusterStatus {
  /*
(Output)
ResourceConditions provide a standard mechanism for higher-level status reporting from user cluster controller.
Structure is documented below.
*/
  Conditions?: Array<Gkeonprem_BareMetalClusterStatusCondition>;

  /*
(Output)
Human-friendly representation of the error message from the user cluster
controller. The error message can be temporary as the user cluster
controller creates a cluster or node pool. If the error message persists
for a longer period of time, it can be used to surface error message to
indicate real problems requiring user intervention.
*/
  ErrorMessage?: string;
}

export function Gkeonprem_BareMetalClusterStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Conditions",
      "(Output)\nResourceConditions provide a standard mechanism for higher-level status reporting from user cluster controller.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterStatusCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ErrorMessage",
      "(Output)\nHuman-friendly representation of the error message from the user cluster\ncontroller. The error message can be temporary as the user cluster\ncontroller creates a cluster or node pool. If the error message persists\nfor a longer period of time, it can be used to surface error message to\nindicate real problems requiring user intervention.",
      [],
      false,
      false,
    ),
  ];
}
