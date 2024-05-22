import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  iam_WorkforcePoolProviderOidcClientSecret,
  iam_WorkforcePoolProviderOidcClientSecret_GetTypes,
} from "./iam_WorkforcePoolProviderOidcClientSecret";
import {
  iam_WorkforcePoolProviderOidcWebSsoConfig,
  iam_WorkforcePoolProviderOidcWebSsoConfig_GetTypes,
} from "./iam_WorkforcePoolProviderOidcWebSsoConfig";

export interface iam_WorkforcePoolProviderOidc {
  // The client ID. Must match the audience claim of the JWT issued by the identity provider.
  clientId?: string;

  /*
The optional client secret. Required to enable Authorization Code flow for web sign-in.
Structure is documented below.
*/
  clientSecret?: iam_WorkforcePoolProviderOidcClientSecret;

  // The OIDC issuer URI. Must be a valid URI using the 'https' scheme.
  issuerUri?: string;

  /*
OIDC JWKs in JSON String format. For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the `jwks_uri` from the discovery document fetched from the
.well-known path for the `issuer_uri`. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:
*/
  jwksJson?: string;

  /*
Configuration for web single sign-on for the OIDC provider. Here, web sign-in refers to console sign-in and gcloud sign-in through the browser.
Structure is documented below.
*/
  webSsoConfig?: iam_WorkforcePoolProviderOidcWebSsoConfig;
}

export function iam_WorkforcePoolProviderOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "The client ID. Must match the audience claim of the JWT issued by the identity provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "clientSecret",
      "The optional client secret. Required to enable Authorization Code flow for web sign-in.\nStructure is documented below.",
      iam_WorkforcePoolProviderOidcClientSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuerUri",
      "The OIDC issuer URI. Must be a valid URI using the 'https' scheme.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jwksJson",
      "OIDC JWKs in JSON String format. For details on definition of a\nJWK, see https:tools.ietf.org/html/rfc7517. If not set, then we\nuse the `jwks_uri` from the discovery document fetched from the\n.well-known path for the `issuer_uri`. Currently, RSA and EC asymmetric\nkeys are supported. The JWK must use following format and include only\nthe following fields:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "webSsoConfig",
      "Configuration for web single sign-on for the OIDC provider. Here, web sign-in refers to console sign-in and gcloud sign-in through the browser.\nStructure is documented below.",
      iam_WorkforcePoolProviderOidcWebSsoConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
