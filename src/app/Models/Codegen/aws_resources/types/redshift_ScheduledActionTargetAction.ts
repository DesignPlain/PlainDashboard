import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  redshift_ScheduledActionTargetActionPauseCluster,
  redshift_ScheduledActionTargetActionPauseCluster_GetTypes,
} from "./redshift_ScheduledActionTargetActionPauseCluster";
import {
  redshift_ScheduledActionTargetActionResizeCluster,
  redshift_ScheduledActionTargetActionResizeCluster_GetTypes,
} from "./redshift_ScheduledActionTargetActionResizeCluster";
import {
  redshift_ScheduledActionTargetActionResumeCluster,
  redshift_ScheduledActionTargetActionResumeCluster_GetTypes,
} from "./redshift_ScheduledActionTargetActionResumeCluster";

export interface redshift_ScheduledActionTargetAction {
  // An action that runs a `PauseCluster` API operation. Documented below.
  pauseCluster?: redshift_ScheduledActionTargetActionPauseCluster;

  // An action that runs a `ResizeCluster` API operation. Documented below.
  resizeCluster?: redshift_ScheduledActionTargetActionResizeCluster;

  // An action that runs a `ResumeCluster` API operation. Documented below.
  resumeCluster?: redshift_ScheduledActionTargetActionResumeCluster;
}

export function redshift_ScheduledActionTargetAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "resumeCluster",
      "An action that runs a `ResumeCluster` API operation. Documented below.",
      redshift_ScheduledActionTargetActionResumeCluster_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pauseCluster",
      "An action that runs a `PauseCluster` API operation. Documented below.",
      redshift_ScheduledActionTargetActionPauseCluster_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "resizeCluster",
      "An action that runs a `ResizeCluster` API operation. Documented below.",
      redshift_ScheduledActionTargetActionResizeCluster_GetTypes(),
      false,
      false,
    ),
  ];
}
