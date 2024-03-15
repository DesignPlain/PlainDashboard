import { AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig } from "./AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig";

export interface AiFeatureOnlineStoreDedicatedServingEndpoint {
  /*
Private service connect config.
Structure is documented below.
*/
  PrivateServiceConnectConfig?: AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig;

  /*
(Output)
Domain name to use for this FeatureOnlineStore
*/
  PublicEndpointDomainName?: string;

  /*
(Output)
Name of the service attachment resource. Applicable only if private service connect is enabled and after FeatureViewSync is created.
*/
  ServiceAttachment?: string;
}
