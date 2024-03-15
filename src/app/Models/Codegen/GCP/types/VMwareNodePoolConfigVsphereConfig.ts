import { VMwareNodePoolConfigVsphereConfigTag } from "./VMwareNodePoolConfigVsphereConfigTag";

export interface VMwareNodePoolConfigVsphereConfig {
  // The name of the vCenter datastore. Inherited from the user cluster.
  Datastore?: string;

  // Vsphere host groups to apply to all VMs in the node pool
  HostGroups?: Array<string>;

  /*
Tags to apply to VMs.
Structure is documented below.
*/
  Tags?: Array<VMwareNodePoolConfigVsphereConfigTag>;
}
