import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_IdentityPoolCognitoIdentityProvider {
  // The client ID for the Amazon Cognito Identity User Pool.
  clientId?: string;

  // The provider name for an Amazon Cognito Identity User Pool.
  providerName?: string;

  // Whether server-side token validation is enabled for the identity provider’s token or not.
  serverSideTokenCheck?: boolean;
}

export function cognito_IdentityPoolCognitoIdentityProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "The client ID for the Amazon Cognito Identity User Pool.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "providerName",
      "The provider name for an Amazon Cognito Identity User Pool.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "serverSideTokenCheck",
      "Whether server-side token validation is enabled for the identity provider’s token or not.",
      [],
      false,
      false,
    ),
  ];
}
