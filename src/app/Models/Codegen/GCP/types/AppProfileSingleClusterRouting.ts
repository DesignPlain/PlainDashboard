export interface AppProfileSingleClusterRouting {
  // The cluster to which read/write requests should be routed.
  ClusterId?: string;

  /*
If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
It is unsafe to send these requests to the same table/row/column in multiple clusters.
*/
  AllowTransactionalWrites?: boolean;
}
