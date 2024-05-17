import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareNodePoolStatusCondition {
  /*
(Output)
Last time the condition transit from one status to another.
*/
  LastTransitionTime?: string;

  /*
(Output)
Human-readable message indicating details about last transition.
*/
  Message?: string;

  /*
(Output)
Machine-readable message indicating details about last transition.
*/
  Reason?: string;

  /*
(Output)
The lifecycle state of the condition.
*/
  State?: string;

  /*
(Output)
Type of the condition.
(e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)
*/
  Type?: string;
}

export function Gkeonprem_VMwareNodePoolStatusCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LastTransitionTime",
      "(Output)\nLast time the condition transit from one status to another.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "(Output)\nHuman-readable message indicating details about last transition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Reason",
      "(Output)\nMachine-readable message indicating details about last transition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nThe lifecycle state of the condition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "(Output)\nType of the condition.\n(e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)",
      [],
      false,
      false,
    ),
  ];
}
