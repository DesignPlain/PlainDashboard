import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionRetryStrategyEvaluateOnExit {
  // Specifies the action to take if all of the specified conditions (onStatusReason, onReason, and onExitCode) are met. The values aren't case sensitive.
  action?: string;

  // Contains a glob pattern to match against the decimal representation of the ExitCode returned for a job.
  onExitCode?: string;

  // Contains a glob pattern to match against the Reason returned for a job.
  onReason?: string;

  // Contains a glob pattern to match against the StatusReason returned for a job.
  onStatusReason?: string;
}

export function batch_getJobDefinitionRetryStrategyEvaluateOnExit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'action',
      "Specifies the action to take if all of the specified conditions (onStatusReason, onReason, and onExitCode) are met. The values aren't case sensitive.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'onExitCode',
      'Contains a glob pattern to match against the decimal representation of the ExitCode returned for a job.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'onReason',
      'Contains a glob pattern to match against the Reason returned for a job.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'onStatusReason',
      'Contains a glob pattern to match against the StatusReason returned for a job.',
      () => [],
      true,
      false,
    ),
  ];
}
