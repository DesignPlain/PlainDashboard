export interface NetworkVpcNetwork {
  /*
(Output)
The relative resource name of the service VPC network this VMware Engine network is attached to.
For example: projects/123123/global/networks/my-network
*/
  Network?: string;

  /*
VMware Engine network type.
Possible values are: `LEGACY`, `STANDARD`.
*/
  Type?: string;
}
