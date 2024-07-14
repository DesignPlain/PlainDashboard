import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cognito_IdentityPoolCognitoIdentityProvider,
  cognito_IdentityPoolCognitoIdentityProvider_GetTypes,
} from "../types/cognito_IdentityPoolCognitoIdentityProvider";

export interface IdentityPoolArgs {
  // The Cognito Identity Pool name.
  identityPoolName?: string;

  // Set of OpendID Connect provider ARNs.
  openidConnectProviderArns?: Array<string>;

  // An array of Amazon Resource Names (ARNs) of the SAML provider for your identity.
  samlProviderArns?: Array<string>;

  // Key-Value pairs mapping provider names to provider app IDs.
  supportedLoginProviders?: Map<string, string>;

  // Enables or disables the classic / basic authentication flow. Default is `false`.
  allowClassicFlow?: boolean;

  // An array of Amazon Cognito Identity user pools and their client IDs.
  cognitoIdentityProviders?: Array<cognito_IdentityPoolCognitoIdentityProvider>;

  /*
The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your
backend and the Cognito service to communicate about the developer provider.
*/
  developerProviderName?: string;

  // A map of tags to assign to the Identity Pool. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Whether the identity pool supports unauthenticated logins or not.
  allowUnauthenticatedIdentities?: boolean;
}
export class IdentityPool extends Resource {
  // The Cognito Identity Pool name.
  public identityPoolName?: string;

  // Key-Value pairs mapping provider names to provider app IDs.
  public supportedLoginProviders?: Map<string, string>;

  // A map of tags to assign to the Identity Pool. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether the identity pool supports unauthenticated logins or not.
  public allowUnauthenticatedIdentities?: boolean;

  // The ARN of the identity pool.
  public arn?: string;

  /*
The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your
backend and the Cognito service to communicate about the developer provider.
*/
  public developerProviderName?: string;

  // An array of Amazon Resource Names (ARNs) of the SAML provider for your identity.
  public samlProviderArns?: Array<string>;

  // Enables or disables the classic / basic authentication flow. Default is `false`.
  public allowClassicFlow?: boolean;

  // An array of Amazon Cognito Identity user pools and their client IDs.
  public cognitoIdentityProviders?: Array<cognito_IdentityPoolCognitoIdentityProvider>;

  // Set of OpendID Connect provider ARNs.
  public openidConnectProviderArns?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "openidConnectProviderArns",
        "Set of OpendID Connect provider ARNs.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "supportedLoginProviders",
        "Key-Value pairs mapping provider names to provider app IDs.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cognitoIdentityProviders",
        "An array of Amazon Cognito Identity user pools and their client IDs.",
        cognito_IdentityPoolCognitoIdentityProvider_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityPoolName",
        "The Cognito Identity Pool name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "samlProviderArns",
        "An array of Amazon Resource Names (ARNs) of the SAML provider for your identity.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowClassicFlow",
        "Enables or disables the classic / basic authentication flow. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "developerProviderName",
        'The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your\nbackend and the Cognito service to communicate about the developer provider.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the Identity Pool. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowUnauthenticatedIdentities",
        "Whether the identity pool supports unauthenticated logins or not.",
        [],
        false,
        false,
      ),
    ];
  }
}
