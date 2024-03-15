export interface VMwareClusterControlPlaneNodeVsphereConfig {
  /*
(Output)
The Vsphere datastore used by the Control Plane Node.
*/
  Datastore?: string;

  /*
(Output)
The Vsphere storage policy used by the control plane Node.

- - -
*/
  StoragePolicyName?: string;
}
