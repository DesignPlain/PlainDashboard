export interface ClusterNetworkPolicy {
  // The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED.
  Provider?: string;

  // Whether network policy is enabled on the cluster.
  Enabled?: boolean;
}
