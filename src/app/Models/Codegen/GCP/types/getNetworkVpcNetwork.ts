export interface getNetworkVpcNetwork {
  /*
The relative resource name of the service VPC network this VMware Engine network is attached to.
For example: projects/123123/global/networks/my-network
*/
  Network?: string;

  // Type of VPC network (INTRANET, INTERNET, or GOOGLE_CLOUD)
  Type?: string;
}
