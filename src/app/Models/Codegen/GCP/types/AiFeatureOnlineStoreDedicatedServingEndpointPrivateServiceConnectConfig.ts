export interface AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig {
  // If set to true, customers will use private service connection to send request. Otherwise, the connection will set to public endpoint.
  EnablePrivateServiceConnect?: boolean;

  // A list of Projects from which the forwarding rule will target the service attachment.
  ProjectAllowlists?: Array<string>;
}
