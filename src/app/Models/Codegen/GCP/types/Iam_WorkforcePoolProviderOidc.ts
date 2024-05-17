import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Iam_WorkforcePoolProviderOidcClientSecret,
  Iam_WorkforcePoolProviderOidcClientSecret_GetTypes,
} from "./Iam_WorkforcePoolProviderOidcClientSecret";
import {
  Iam_WorkforcePoolProviderOidcWebSsoConfig,
  Iam_WorkforcePoolProviderOidcWebSsoConfig_GetTypes,
} from "./Iam_WorkforcePoolProviderOidcWebSsoConfig";

export interface Iam_WorkforcePoolProviderOidc {
  // The client ID. Must match the audience claim of the JWT issued by the identity provider.
  ClientId?: string;

  /*
The optional client secret. Required to enable Authorization Code flow for web sign-in.
Structure is documented below.
*/
  ClientSecret?: Iam_WorkforcePoolProviderOidcClientSecret;

  // The OIDC issuer URI. Must be a valid URI using the 'https' scheme.
  IssuerUri?: string;

  /*
OIDC JWKs in JSON String format. For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the `jwks_uri` from the discovery document fetched from the
.well-known path for the `issuer_uri`. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:
*/
  JwksJson?: string;

  /*
Configuration for web single sign-on for the OIDC provider. Here, web sign-in refers to console sign-in and gcloud sign-in through the browser.
Structure is documented below.
*/
  WebSsoConfig?: Iam_WorkforcePoolProviderOidcWebSsoConfig;
}

export function Iam_WorkforcePoolProviderOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClientId",
      "The client ID. Must match the audience claim of the JWT issued by the identity provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ClientSecret",
      "The optional client secret. Required to enable Authorization Code flow for web sign-in.\nStructure is documented below.",
      Iam_WorkforcePoolProviderOidcClientSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IssuerUri",
      "The OIDC issuer URI. Must be a valid URI using the 'https' scheme.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "JwksJson",
      "OIDC JWKs in JSON String format. For details on definition of a\nJWK, see https:tools.ietf.org/html/rfc7517. If not set, then we\nuse the `jwks_uri` from the discovery document fetched from the\n.well-known path for the `issuer_uri`. Currently, RSA and EC asymmetric\nkeys are supported. The JWK must use following format and include only\nthe following fields:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WebSsoConfig",
      "Configuration for web single sign-on for the OIDC provider. Here, web sign-in refers to console sign-in and gcloud sign-in through the browser.\nStructure is documented below.",
      Iam_WorkforcePoolProviderOidcWebSsoConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
