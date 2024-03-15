export interface WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig {
  // The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: - `https://www.googleapis.com/compute/v1/projects/` Note that the policy must be in the same project and Dataproc region.
  Policy?: string;
}
