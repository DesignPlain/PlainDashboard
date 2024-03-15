export interface AiFeatureStoreOnlineServingConfigScaling {
  // The maximum number of nodes to scale up to. Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.
  MaxNodeCount?: number;

  // The minimum number of nodes to scale down to. Must be greater than or equal to 1.
  MinNodeCount?: number;
}
