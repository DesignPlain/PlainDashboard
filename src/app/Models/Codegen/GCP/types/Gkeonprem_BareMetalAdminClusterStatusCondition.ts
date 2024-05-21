import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_BareMetalAdminClusterStatusCondition {
  /*
Type of the condition.
(e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)
*/
  type?: string;

  /*
(Output)
Last time the condition transit from one status to another.
*/
  lastTransitionTime?: string;

  // Human-readable message indicating details about last transition.
  message?: string;

  /*
(Output)
A human-readable message of the check failure.
*/
  reason?: string;

  /*
(Output)
The lifecycle state of the condition.
*/
  state?: string;
}

export function gkeonprem_BareMetalAdminClusterStatusCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "reason",
      "(Output)\nA human-readable message of the check failure.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nThe lifecycle state of the condition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of the condition.\n(e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastTransitionTime",
      "(Output)\nLast time the condition transit from one status to another.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "Human-readable message indicating details about last transition.",
      [],
      false,
      false,
    ),
  ];
}
