import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking {
  // Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
  deployment?: string;

  // Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.
  disablePodOverprovisioning?: boolean;

  // Required. Name of the Kubernetes Service.
  service?: string;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deployment",
      "Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disablePodOverprovisioning",
      "Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Required. Name of the Kubernetes Service.",
      [],
      true,
      false,
    ),
  ];
}
