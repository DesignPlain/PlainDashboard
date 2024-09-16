import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appsync_FunctionSyncConfigLambdaConflictHandlerConfig,
  appsync_FunctionSyncConfigLambdaConflictHandlerConfig_GetTypes,
} from './appsync_FunctionSyncConfigLambdaConflictHandlerConfig';

export interface appsync_FunctionSyncConfig {
  // Conflict Resolution strategy to perform in the event of a conflict. Valid values are `NONE`, `OPTIMISTIC_CONCURRENCY`, `AUTOMERGE`, and `LAMBDA`.
  conflictHandler?: string;

  // Lambda Conflict Handler Config when configuring `LAMBDA` as the Conflict Handler. See `lambda_conflict_handler_config` Block for details.
  lambdaConflictHandlerConfig?: appsync_FunctionSyncConfigLambdaConflictHandlerConfig;

  // Conflict Detection strategy to use. Valid values are `NONE` and `VERSION`.
  conflictDetection?: string;
}

export function appsync_FunctionSyncConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'conflictDetection',
      'Conflict Detection strategy to use. Valid values are `NONE` and `VERSION`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'conflictHandler',
      'Conflict Resolution strategy to perform in the event of a conflict. Valid values are `NONE`, `OPTIMISTIC_CONCURRENCY`, `AUTOMERGE`, and `LAMBDA`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'lambdaConflictHandlerConfig',
      'Lambda Conflict Handler Config when configuring `LAMBDA` as the Conflict Handler. See `lambda_conflict_handler_config` Block for details.',
      () => appsync_FunctionSyncConfigLambdaConflictHandlerConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
