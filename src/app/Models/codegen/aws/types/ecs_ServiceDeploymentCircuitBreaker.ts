import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecs_ServiceDeploymentCircuitBreaker {
  // Whether to enable the deployment circuit breaker logic for the service.
  enable?: boolean;

  // Whether to enable Amazon ECS to roll back the service if a service deployment fails. If rollback is enabled, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
  rollback?: boolean;
}

export function ecs_ServiceDeploymentCircuitBreaker_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enable",
      "Whether to enable the deployment circuit breaker logic for the service.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "rollback",
      "Whether to enable Amazon ECS to roll back the service if a service deployment fails. If rollback is enabled, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.",
      () => [],
      true,
      false,
    ),
  ];
}
