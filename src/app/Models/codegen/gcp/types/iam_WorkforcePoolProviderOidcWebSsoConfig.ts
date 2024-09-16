import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iam_WorkforcePoolProviderOidcWebSsoConfig {
  /*
Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. By default, the `openid`, `profile` and `email` scopes that are supported by the identity provider are requested.
Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured.
*/
  additionalScopes?: Array<string>;

  /*
The behavior for how OIDC Claims are included in the `assertion` object used for attribute mapping and attribute condition.
- MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS: Merge the UserInfo Endpoint Claims with ID Token Claims, preferring UserInfo Claim Values for the same Claim Name. This option is available only for the Authorization Code Flow.
- ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims.
Possible values are: `MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS`, `ONLY_ID_TOKEN_CLAIMS`.
*/
  assertionClaimsBehavior?: string;

  /*
The Response Type to request for in the OIDC Authorization Request for web sign-in.
The `CODE` Response Type is recommended to avoid the Implicit Flow, for security reasons.
- CODE: The `response_type=code` selection uses the Authorization Code Flow for web sign-in. Requires a configured client secret.
- ID_TOKEN: The `response_type=id_token` selection uses the Implicit Flow for web sign-in.
Possible values are: `CODE`, `ID_TOKEN`.
*/
  responseType?: string;
}

export function iam_WorkforcePoolProviderOidcWebSsoConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'additionalScopes',
      'Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. By default, the `openid`, `profile` and `email` scopes that are supported by the identity provider are requested.\nEach additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'assertionClaimsBehavior',
      'The behavior for how OIDC Claims are included in the `assertion` object used for attribute mapping and attribute condition.\n* MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS: Merge the UserInfo Endpoint Claims with ID Token Claims, preferring UserInfo Claim Values for the same Claim Name. This option is available only for the Authorization Code Flow.\n* ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims.\nPossible values are: `MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS`, `ONLY_ID_TOKEN_CLAIMS`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'responseType',
      'The Response Type to request for in the OIDC Authorization Request for web sign-in.\nThe `CODE` Response Type is recommended to avoid the Implicit Flow, for security reasons.\n* CODE: The `response_type=code` selection uses the Authorization Code Flow for web sign-in. Requires a configured client secret.\n* ID_TOKEN: The `response_type=id_token` selection uses the Implicit Flow for web sign-in.\nPossible values are: `CODE`, `ID_TOKEN`.',
      () => [],
      true,
      false,
    ),
  ];
}
