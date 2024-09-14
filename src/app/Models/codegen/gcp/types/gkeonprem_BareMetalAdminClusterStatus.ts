import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_BareMetalAdminClusterStatusCondition,
  gkeonprem_BareMetalAdminClusterStatusCondition_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterStatusCondition";

export interface gkeonprem_BareMetalAdminClusterStatus {
  /*
(Output)
ResourceConditions provide a standard mechanism for higher-level status reporting from admin cluster controller.
Structure is documented below.
*/
  conditions?: Array<gkeonprem_BareMetalAdminClusterStatusCondition>;

  /*
(Output)
Human-friendly representation of the error message from the admin cluster
controller. The error message can be temporary as the admin cluster
controller creates a cluster or node pool. If the error message persists
for a longer period of time, it can be used to surface error message to
indicate real problems requiring user intervention.
*/
  errorMessage?: string;
}

export function gkeonprem_BareMetalAdminClusterStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "errorMessage",
      "(Output)\nHuman-friendly representation of the error message from the admin cluster\ncontroller. The error message can be temporary as the admin cluster\ncontroller creates a cluster or node pool. If the error message persists\nfor a longer period of time, it can be used to surface error message to\nindicate real problems requiring user intervention.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "(Output)\nResourceConditions provide a standard mechanism for higher-level status reporting from admin cluster controller.\nStructure is documented below.",
      () => gkeonprem_BareMetalAdminClusterStatusCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
