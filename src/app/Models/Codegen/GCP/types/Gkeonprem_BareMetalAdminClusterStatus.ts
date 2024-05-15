import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterStatusCondition,
  Gkeonprem_BareMetalAdminClusterStatusCondition_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterStatusCondition";

export interface Gkeonprem_BareMetalAdminClusterStatus {
  /*
(Output)
Human-friendly representation of the error message from the admin cluster
controller. The error message can be temporary as the admin cluster
controller creates a cluster or node pool. If the error message persists
for a longer period of time, it can be used to surface error message to
indicate real problems requiring user intervention.
*/
  ErrorMessage?: string;

  /*
(Output)
ResourceConditions provide a standard mechanism for higher-level status reporting from admin cluster controller.
Structure is documented below.
*/
  Conditions?: Array<Gkeonprem_BareMetalAdminClusterStatusCondition>;
}

export function Gkeonprem_BareMetalAdminClusterStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ErrorMessage",
      "(Output)\nHuman-friendly representation of the error message from the admin cluster\ncontroller. The error message can be temporary as the admin cluster\ncontroller creates a cluster or node pool. If the error message persists\nfor a longer period of time, it can be used to surface error message to\nindicate real problems requiring user intervention.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Conditions",
      "(Output)\nResourceConditions provide a standard mechanism for higher-level status reporting from admin cluster controller.\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterStatusCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
