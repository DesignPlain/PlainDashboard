import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_JobDefinitionRetryStrategyEvaluateOnExit,
  batch_JobDefinitionRetryStrategyEvaluateOnExit_GetTypes,
} from './batch_JobDefinitionRetryStrategyEvaluateOnExit';

export interface batch_JobDefinitionRetryStrategy {
  // Evaluate on exit conditions under which the job should be retried or failed. If this parameter is specified, then the `attempts` parameter must also be specified. You may specify up to 5 configuration blocks.
  evaluateOnExits?: Array<batch_JobDefinitionRetryStrategyEvaluateOnExit>;

  // Number of times to move a job to the `RUNNABLE` status. You may specify between `1` and `10` attempts.
  attempts?: number;
}

export function batch_JobDefinitionRetryStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'evaluateOnExits',
      'Evaluate on exit conditions under which the job should be retried or failed. If this parameter is specified, then the `attempts` parameter must also be specified. You may specify up to 5 configuration blocks.',
      () => batch_JobDefinitionRetryStrategyEvaluateOnExit_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'attempts',
      'Number of times to move a job to the `RUNNABLE` status. You may specify between `1` and `10` attempts.',
      () => [],
      false,
      false,
    ),
  ];
}
