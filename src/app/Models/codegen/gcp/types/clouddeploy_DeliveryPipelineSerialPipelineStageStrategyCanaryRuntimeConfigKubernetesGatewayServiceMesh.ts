import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh {
  // Required. Name of the Gateway API HTTPRoute.
  httpRoute?: string;

  // Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.
  routeUpdateWaitTime?: string;

  // Required. Name of the Kubernetes Service.
  service?: string;

  // Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.
  stableCutbackDuration?: string;

  // Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
  deployment?: string;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "httpRoute",
      "Required. Name of the Gateway API HTTPRoute.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routeUpdateWaitTime",
      "Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Required. Name of the Kubernetes Service.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stableCutbackDuration",
      "Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deployment",
      "Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.",
      () => [],
      true,
      false,
    ),
  ];
}
