import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh {
  // Required. Name of the Gateway API HTTPRoute.
  HttpRoute?: string;

  // Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.
  RouteUpdateWaitTime?: string;

  // Required. Name of the Kubernetes Service.
  Service?: string;

  // Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.
  StableCutbackDuration?: string;

  // Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
  Deployment?: string;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StableCutbackDuration",
      "Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Deployment",
      "Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HttpRoute",
      "Required. Name of the Gateway API HTTPRoute.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RouteUpdateWaitTime",
      "Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "Required. Name of the Kubernetes Service.",
      [],
      true,
      false,
    ),
  ];
}
