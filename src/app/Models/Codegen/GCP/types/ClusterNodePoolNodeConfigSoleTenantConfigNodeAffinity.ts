export interface ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  // The default or custom node affinity label key name.
  Key?: string;

  // Specifies affinity or anti-affinity. Accepted values are `"IN"` or `"NOT_IN"`
  Operator?: string;

  // List of node affinity label values as strings.
  Values?: Array<string>;
}
