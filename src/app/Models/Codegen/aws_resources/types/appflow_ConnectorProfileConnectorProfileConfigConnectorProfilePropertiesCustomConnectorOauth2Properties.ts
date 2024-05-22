import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties {
  // The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication. One of: `AUTHORIZATION_CODE`, `CLIENT_CREDENTIALS`.
  oauth2GrantType?: string;

  // The token URL required for OAuth 2.0 authentication.
  tokenUrl?: string;

  // Associates your token URL with a map of properties that you define. Use this parameter to provide any additional details that the connector requires to authenticate your request.
  tokenUrlCustomProperties?: Map<string, string>;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "oauth2GrantType",
      "The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication. One of: `AUTHORIZATION_CODE`, `CLIENT_CREDENTIALS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tokenUrl",
      "The token URL required for OAuth 2.0 authentication.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tokenUrlCustomProperties",
      "Associates your token URL with a map of properties that you define. Use this parameter to provide any additional details that the connector requires to authenticate your request.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
