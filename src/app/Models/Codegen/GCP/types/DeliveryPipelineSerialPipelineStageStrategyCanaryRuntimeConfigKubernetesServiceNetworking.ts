export interface DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetesServiceNetworking {
  // Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.
  DisablePodOverprovisioning?: boolean;

  // Required. Name of the Kubernetes Service.
  Service?: string;

  // Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
  Deployment?: string;
}
