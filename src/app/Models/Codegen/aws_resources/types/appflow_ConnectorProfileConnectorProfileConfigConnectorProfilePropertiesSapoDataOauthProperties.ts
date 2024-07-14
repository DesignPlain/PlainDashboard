import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties {
  // The token URL required for OAuth 2.0 authentication.
  tokenUrl?: string;

  // The authorization code url required to redirect to SAP Login Page to fetch authorization code for OAuth type authentication.
  authCodeUrl?: string;

  // The OAuth scopes required for OAuth type authentication.
  oauthScopes?: Array<string>;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tokenUrl",
      "The token URL required for OAuth 2.0 authentication.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authCodeUrl",
      "The authorization code url required to redirect to SAP Login Page to fetch authorization code for OAuth type authentication.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "oauthScopes",
      "The OAuth scopes required for OAuth type authentication.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
