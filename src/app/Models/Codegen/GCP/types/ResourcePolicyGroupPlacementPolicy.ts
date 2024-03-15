export interface ResourcePolicyGroupPlacementPolicy {
  /*
Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.
Specify `COLLOCATED` to enable collocation. Can only be specified with `vm_count`. If compute instances are created
with a COLLOCATED policy, then exactly `vm_count` instances must be created at the same time with the resource policy
attached.
Possible values are: `COLLOCATED`.
*/
  Collocation?: string;

  // Specifies the number of max logical switches.
  MaxDistance?: number;

  /*
Number of VMs in this placement group. Google does not recommend that you use this field
unless you use a compact policy and you want your policy to work only if it contains this
exact number of VMs.
*/
  VmCount?: number;

  /*
The number of availability domains instances will be spread across. If two instances are in different
availability domain, they will not be put in the same low latency network
*/
  AvailabilityDomainCount?: number;
}
