import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_JobDefinitionRetryStrategyEvaluateOnExit {
  // Specifies the action to take if all of the specified conditions are met. The values are not case sensitive. Valid values: `RETRY`, `EXIT`.
  action?: string;

  // A glob pattern to match against the decimal representation of the exit code returned for a job.
  onExitCode?: string;

  // A glob pattern to match against the reason returned for a job.
  onReason?: string;

  // A glob pattern to match against the status reason returned for a job.
  onStatusReason?: string;
}

export function batch_JobDefinitionRetryStrategyEvaluateOnExit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "action",
      "Specifies the action to take if all of the specified conditions are met. The values are not case sensitive. Valid values: `RETRY`, `EXIT`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "onExitCode",
      "A glob pattern to match against the decimal representation of the exit code returned for a job.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "onReason",
      "A glob pattern to match against the reason returned for a job.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "onStatusReason",
      "A glob pattern to match against the status reason returned for a job.",
      [],
      false,
      true,
    ),
  ];
}
