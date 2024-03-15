import { WorkflowTemplatePlacementClusterSelector } from "./WorkflowTemplatePlacementClusterSelector";
import { WorkflowTemplatePlacementManagedCluster } from "./WorkflowTemplatePlacementManagedCluster";

export interface WorkflowTemplatePlacement {
  // A selector that chooses target cluster for jobs based on metadata. The selector is evaluated at the time each job is submitted.
  ClusterSelector?: WorkflowTemplatePlacementClusterSelector;

  // A cluster that is managed by the workflow.
  ManagedCluster?: WorkflowTemplatePlacementManagedCluster;
}
