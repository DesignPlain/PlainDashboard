import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh";
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking";

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes {
  // Kubernetes Gateway API service mesh configuration.
  gatewayServiceMesh?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh;

  // Kubernetes Service networking configuration.
  serviceNetworking?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "gatewayServiceMesh",
      "Kubernetes Gateway API service mesh configuration.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceNetworking",
      "Kubernetes Service networking configuration.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking_GetTypes(),
      false,
      false,
    ),
  ];
}
