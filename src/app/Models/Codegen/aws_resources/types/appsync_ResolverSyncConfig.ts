import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appsync_ResolverSyncConfigLambdaConflictHandlerConfig,
  appsync_ResolverSyncConfigLambdaConflictHandlerConfig_GetTypes,
} from "./appsync_ResolverSyncConfigLambdaConflictHandlerConfig";

export interface appsync_ResolverSyncConfig {
  // Lambda Conflict Handler Config when configuring `LAMBDA` as the Conflict Handler. See Lambda Conflict Handler Config.
  lambdaConflictHandlerConfig?: appsync_ResolverSyncConfigLambdaConflictHandlerConfig;

  // Conflict Detection strategy to use. Valid values are `NONE` and `VERSION`.
  conflictDetection?: string;

  // Conflict Resolution strategy to perform in the event of a conflict. Valid values are `NONE`, `OPTIMISTIC_CONCURRENCY`, `AUTOMERGE`, and `LAMBDA`.
  conflictHandler?: string;
}

export function appsync_ResolverSyncConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "lambdaConflictHandlerConfig",
      "Lambda Conflict Handler Config when configuring `LAMBDA` as the Conflict Handler. See Lambda Conflict Handler Config.",
      appsync_ResolverSyncConfigLambdaConflictHandlerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "conflictDetection",
      "Conflict Detection strategy to use. Valid values are `NONE` and `VERSION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "conflictHandler",
      "Conflict Resolution strategy to perform in the event of a conflict. Valid values are `NONE`, `OPTIMISTIC_CONCURRENCY`, `AUTOMERGE`, and `LAMBDA`.",
      [],
      false,
      false,
    ),
  ];
}
