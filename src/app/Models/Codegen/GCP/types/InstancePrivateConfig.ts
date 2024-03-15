export interface InstancePrivateConfig {
  // CA pool resource, resource must in the format of `projects/{project}/locations/{location}/caPools/{ca_pool}`.
  CaPool?: string;

  /*
(Output)
Service Attachment for HTTP, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.
*/
  HttpServiceAttachment?: string;

  // 'Indicate if it's private instance.'
  IsPrivate?: boolean;

  /*
(Output)
Service Attachment for SSH, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.
*/
  SshServiceAttachment?: string;
}
