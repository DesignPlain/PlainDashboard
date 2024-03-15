export interface DeliveryPipelineConditionTargetsTypeCondition {
  // Human readable error message.
  ErrorDetails?: string;

  // True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters.
  Status?: boolean;
}
