import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking {
  // Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.
  DisablePodOverprovisioning?: boolean;

  // Required. Name of the Kubernetes Service.
  Service?: string;

  // Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
  Deployment?: string;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "DisablePodOverprovisioning",
      "Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.",
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
    new DynamicUIProps(
      InputType.String,
      "Deployment",
      "Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.",
      [],
      true,
      false,
    ),
  ];
}
