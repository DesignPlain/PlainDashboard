export interface WorkflowTemplatePlacementClusterSelector {
  // Required. The cluster labels. Cluster must have all labels to match.
  ClusterLabels?: Map<string, string>;

  // The zone where workflow process executes. This parameter does not affect the selection of the cluster. If unspecified, the zone of the first cluster matching the selector is used.
  Zone?: string;
}
