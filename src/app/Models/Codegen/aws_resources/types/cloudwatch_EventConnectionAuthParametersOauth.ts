import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudwatch_EventConnectionAuthParametersOauthOauthHttpParameters,
  cloudwatch_EventConnectionAuthParametersOauthOauthHttpParameters_GetTypes,
} from "./cloudwatch_EventConnectionAuthParametersOauthOauthHttpParameters";
import {
  cloudwatch_EventConnectionAuthParametersOauthClientParameters,
  cloudwatch_EventConnectionAuthParametersOauthClientParameters_GetTypes,
} from "./cloudwatch_EventConnectionAuthParametersOauthClientParameters";

export interface cloudwatch_EventConnectionAuthParametersOauth {
  // OAuth Http Parameters are additional credentials used to sign the request to the authorization endpoint to exchange the OAuth Client information for an access token. Secret values are stored and managed by AWS Secrets Manager. A maximum of 1 are allowed. Documented below.
  oauthHttpParameters?: cloudwatch_EventConnectionAuthParametersOauthOauthHttpParameters;

  // The URL to the authorization endpoint.
  authorizationEndpoint?: string;

  // Contains the client parameters for OAuth authorization. Contains the following two parameters.
  clientParameters?: cloudwatch_EventConnectionAuthParametersOauthClientParameters;

  // A password for the authorization. Created and stored in AWS Secrets Manager.
  httpMethod?: string;
}

export function cloudwatch_EventConnectionAuthParametersOauth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "oauthHttpParameters",
      "OAuth Http Parameters are additional credentials used to sign the request to the authorization endpoint to exchange the OAuth Client information for an access token. Secret values are stored and managed by AWS Secrets Manager. A maximum of 1 are allowed. Documented below.",
      cloudwatch_EventConnectionAuthParametersOauthOauthHttpParameters_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authorizationEndpoint",
      "The URL to the authorization endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "clientParameters",
      "Contains the client parameters for OAuth authorization. Contains the following two parameters.",
      cloudwatch_EventConnectionAuthParametersOauthClientParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpMethod",
      "A password for the authorization. Created and stored in AWS Secrets Manager.",
      [],
      true,
      false,
    ),
  ];
}
