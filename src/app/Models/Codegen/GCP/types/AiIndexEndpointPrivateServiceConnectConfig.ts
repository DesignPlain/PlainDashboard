export interface AiIndexEndpointPrivateServiceConnectConfig {
  // If set to true, the IndexEndpoint is created without private service access.
  EnablePrivateServiceConnect?: boolean;

  // A list of Projects from which the forwarding rule will target the service attachment.
  ProjectAllowlists?: Array<string>;
}
