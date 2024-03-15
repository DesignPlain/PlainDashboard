import { WorkflowTemplatePlacementManagedClusterConfig } from "./WorkflowTemplatePlacementManagedClusterConfig";

export interface WorkflowTemplatePlacementManagedCluster {
  // The labels to associate with this cluster. Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: {0,63} No more than 32 labels can be associated with a given cluster.
  Labels?: Map<string, string>;

  // Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix. The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.
  ClusterName?: string;

  // Required. The cluster configuration.
  Config?: WorkflowTemplatePlacementManagedClusterConfig;
}
