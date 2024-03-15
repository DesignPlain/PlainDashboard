export interface VMwareClusterFleet {
  /*
(Output)
The name of the managed Hub Membership resource associated to this cluster.
Membership names are formatted as
`projects/<project-number>/locations/<location>/memberships/<cluster-id>`.
*/
  Membership?: string;
}
