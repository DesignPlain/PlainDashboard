import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ConfigBlockingFunctionsForwardInboundCredentials {
  // Whether to pass the user's OAuth identity provider's access token.
  AccessToken?: boolean;

  // Whether to pass the user's OIDC identity provider's ID token.
  IdToken?: boolean;

  // Whether to pass the user's OAuth identity provider's refresh token.
  RefreshToken?: boolean;
}

export function Identityplatform_ConfigBlockingFunctionsForwardInboundCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "RefreshToken",
      "Whether to pass the user's OAuth identity provider's refresh token.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AccessToken",
      "Whether to pass the user's OAuth identity provider's access token.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IdToken",
      "Whether to pass the user's OIDC identity provider's ID token.",
      [],
      false,
      false,
    ),
  ];
}
