export interface ServiceAttachmentConnectedEndpoint {
  /*
(Output)
The URL of the consumer forwarding rule.
*/
  Endpoint?: string;

  /*
(Output)
The status of the connection from the consumer forwarding rule to
this service attachment.
*/
  Status?: string;
}
