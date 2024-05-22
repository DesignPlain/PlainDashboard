import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apigateway_ApiConfigGatewayConfigBackendConfig {
  /*
Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured
(https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend).
*/
  googleServiceAccount?: string;
}

export function apigateway_ApiConfigGatewayConfigBackendConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "googleServiceAccount",
      "Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured\n(https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend).",
      [],
      true,
      true,
    ),
  ];
}
