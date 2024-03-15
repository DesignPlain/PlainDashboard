export interface getClusterFleet {
  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  // Full resource name of the registered fleet membership of the cluster.
  Membership?: string;

  // Short name of the fleet membership, for example "member-1".
  MembershipId?: string;

  // Location of the fleet membership, for example "us-central1".
  MembershipLocation?: string;

  // Whether the cluster has been registered via the fleet API.
  PreRegistered?: boolean;
}
