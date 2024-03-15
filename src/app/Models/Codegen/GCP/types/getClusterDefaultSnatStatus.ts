export interface getClusterDefaultSnatStatus {
  // When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.
  Disabled?: boolean;
}
