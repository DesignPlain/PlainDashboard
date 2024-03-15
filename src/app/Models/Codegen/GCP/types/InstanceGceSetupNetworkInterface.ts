export interface InstanceGceSetupNetworkInterface {
  // Optional. The name of the VPC that this VM instance is in.
  Network?: string;

  /*
Optional. The type of vNIC to be used on this interface. This
may be gVNIC or VirtioNet.
Possible values are: `VIRTIO_NET`, `GVNIC`.
*/
  NicType?: string;

  // Optional. The name of the subnet that this VM instance is in.
  Subnet?: string;
}
