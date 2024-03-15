export interface getClusterClusterAutoscalingResourceLimit {
  // Maximum amount of the resource in the cluster.
  Maximum?: number;

  // Minimum amount of the resource in the cluster.
  Minimum?: number;

  // The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.
  ResourceType?: string;
}
