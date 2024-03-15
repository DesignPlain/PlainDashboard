export interface TriggerDestinationNetworkConfig {
  // Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`
  NetworkAttachment?: string;
}
