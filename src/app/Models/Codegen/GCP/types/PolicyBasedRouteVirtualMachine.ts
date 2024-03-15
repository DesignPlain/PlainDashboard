export interface PolicyBasedRouteVirtualMachine {
  // A list of VM instance tags that this policy-based route applies to. VM instances that have ANY of tags specified here will install this PBR.
  Tags?: Array<string>;
}
