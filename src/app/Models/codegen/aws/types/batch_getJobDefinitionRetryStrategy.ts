import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_getJobDefinitionRetryStrategyEvaluateOnExit,
  batch_getJobDefinitionRetryStrategyEvaluateOnExit_GetTypes,
} from './batch_getJobDefinitionRetryStrategyEvaluateOnExit';

export interface batch_getJobDefinitionRetryStrategy {
  // Array of up to 5 objects that specify the conditions where jobs are retried or failed.
  evaluateOnExits?: Array<batch_getJobDefinitionRetryStrategyEvaluateOnExit>;

  // The number of times to move a job to the RUNNABLE status.
  attempts?: number;
}

export function batch_getJobDefinitionRetryStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'evaluateOnExits',
      'Array of up to 5 objects that specify the conditions where jobs are retried or failed.',
      () => batch_getJobDefinitionRetryStrategyEvaluateOnExit_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'attempts',
      'The number of times to move a job to the RUNNABLE status.',
      () => [],
      true,
      false,
    ),
  ];
}
