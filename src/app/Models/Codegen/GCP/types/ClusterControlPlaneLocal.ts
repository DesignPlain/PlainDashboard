export interface ClusterControlPlaneLocal {
  /*
The number of nodes to serve as replicas of the Control Plane.
Only 1 and 3 are supported.
*/
  NodeCount?: number;

  /*
Name of the Google Distributed Cloud Edge zones where this node pool
will be created. For example: `us-central1-edge-customer-a`.
*/
  NodeLocation?: string;

  /*
Policy configuration about how user applications are deployed.
Possible values are: `SHARED_DEPLOYMENT_POLICY_UNSPECIFIED`, `ALLOWED`, `DISALLOWED`.
*/
  SharedDeploymentPolicy?: string;

  /*
Only machines matching this filter will be allowed to host control
plane nodes. The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).
*/
  MachineFilter?: string;
}
