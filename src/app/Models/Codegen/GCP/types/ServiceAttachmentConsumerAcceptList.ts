export interface ServiceAttachmentConsumerAcceptList {
  /*
The number of consumer forwarding rules the consumer project can
create.
*/
  ConnectionLimit?: number;

  // A project that is allowed to connect to this service attachment.
  ProjectIdOrNum?: string;
}
