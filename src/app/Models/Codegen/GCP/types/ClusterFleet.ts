export interface ClusterFleet {
  // Location of the fleet membership, for example "us-central1".
  MembershipLocation?: string;

  // Whether the cluster has been registered via the fleet API.
  PreRegistered?: boolean;

  // The name of the Fleet host project where this cluster will be registered.
  Project?: string;

  // Full resource name of the registered fleet membership of the cluster.
  Membership?: string;

  // Short name of the fleet membership, for example "member-1".
  MembershipId?: string;
}
