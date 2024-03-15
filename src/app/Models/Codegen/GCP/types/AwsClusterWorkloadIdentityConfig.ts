export interface AwsClusterWorkloadIdentityConfig {
  // The ID of the OIDC Identity Provider (IdP) associated to the Workload Identity Pool.
  IdentityProvider?: string;

  // The OIDC issuer URL for this cluster.
  IssuerUri?: string;

  // The Workload Identity Pool associated to the cluster.
  WorkloadPool?: string;
}
