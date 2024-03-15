export interface getMetastoreServiceNetworkConfigConsumer {
  // The URI of the endpoint used to access the metastore service.
  EndpointUri?: string;

  /*
The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.
It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.
There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:
'projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}
*/
  Subnetwork?: string;
}