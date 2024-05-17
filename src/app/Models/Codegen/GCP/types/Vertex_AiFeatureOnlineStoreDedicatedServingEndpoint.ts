import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig,
  Vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig_GetTypes,
} from "./Vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig";

export interface Vertex_AiFeatureOnlineStoreDedicatedServingEndpoint {
  /*
(Output)
Name of the service attachment resource. Applicable only if private service connect is enabled and after FeatureViewSync is created.
*/
  ServiceAttachment?: string;

  /*
Private service connect config.
Structure is documented below.
*/
  PrivateServiceConnectConfig?: Vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig;

  /*
(Output)
Domain name to use for this FeatureOnlineStore
*/
  PublicEndpointDomainName?: string;
}

export function Vertex_AiFeatureOnlineStoreDedicatedServingEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ServiceAttachment",
      "(Output)\nName of the service attachment resource. Applicable only if private service connect is enabled and after FeatureViewSync is created.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PrivateServiceConnectConfig",
      "Private service connect config.\nStructure is documented below.",
      Vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PublicEndpointDomainName",
      "(Output)\nDomain name to use for this FeatureOnlineStore",
      [],
      false,
      false,
    ),
  ];
}
