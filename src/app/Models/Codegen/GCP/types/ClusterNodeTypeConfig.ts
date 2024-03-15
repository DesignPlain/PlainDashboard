export interface ClusterNodeTypeConfig {
  /*
Customized number of cores available to each node of the type.
This number must always be one of `nodeType.availableCustomCoreCounts`.
If zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.
Once the customer is created then corecount cannot be changed.
*/
  CustomCoreCount?: number;

  // The number of nodes of this type in the cluster.
  NodeCount?: number;

  // The identifier for this object. Format specified above.
  NodeTypeId?: string;
}
