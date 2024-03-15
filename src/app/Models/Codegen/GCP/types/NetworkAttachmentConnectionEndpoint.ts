export interface NetworkAttachmentConnectionEndpoint {
  /*
(Output)
The subnetwork used to assign the IP to the producer instance network interface.
*/
  Subnetwork?: string;

  /*
(Output)
The IPv4 address assigned to the producer instance network interface. This value will be a range in case of Serverless.
*/
  IpAddress?: string;

  /*
(Output)
The project id or number of the interface to which the IP was assigned.
*/
  ProjectIdOrNum?: string;

  /*
(Output)
Alias IP ranges from the same subnetwork.
*/
  SecondaryIpCidrRanges?: string;

  /*
(Output)
The status of a connected endpoint to this network attachment.
*/
  Status?: string;
}
