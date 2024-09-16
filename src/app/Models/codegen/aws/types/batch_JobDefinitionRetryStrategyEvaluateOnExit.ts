import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_JobDefinitionRetryStrategyEvaluateOnExit {
  // Glob pattern to match against the reason returned for a job.
  onReason?: string;

  // Glob pattern to match against the status reason returned for a job.
  onStatusReason?: string;

  // Action to take if all of the specified conditions are met. The values are not case sensitive. Valid values: `retry`, `exit`.
  action?: string;

  // Glob pattern to match against the decimal representation of the exit code returned for a job.
  onExitCode?: string;
}

export function batch_JobDefinitionRetryStrategyEvaluateOnExit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'onExitCode',
      'Glob pattern to match against the decimal representation of the exit code returned for a job.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'onReason',
      'Glob pattern to match against the reason returned for a job.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'onStatusReason',
      'Glob pattern to match against the status reason returned for a job.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'action',
      'Action to take if all of the specified conditions are met. The values are not case sensitive. Valid values: `retry`, `exit`.',
      () => [],
      true,
      false,
    ),
  ];
}
