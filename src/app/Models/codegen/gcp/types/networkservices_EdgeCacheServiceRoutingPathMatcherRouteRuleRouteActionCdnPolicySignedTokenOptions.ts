import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions {
  /*
The allowed signature algorithms to use.
Defaults to using only ED25519.
You may specify up to 3 signature algorithms to use.
Each value may be one of: `ED25519`, `HMAC_SHA_256`, `HMAC_SHA1`.
*/
  allowedSignatureAlgorithms?: Array<string>;

  /*
The query parameter in which to find the token.
The name must be 1-64 characters long and match the regular expression `a-zA-Z-` which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.
Defaults to `edge-cache-token`.
*/
  tokenQueryParameter?: string;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'tokenQueryParameter',
      'The query parameter in which to find the token.\nThe name must be 1-64 characters long and match the regular expression `a-zA-Z*` which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.\nDefaults to `edge-cache-token`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowedSignatureAlgorithms',
      'The allowed signature algorithms to use.\nDefaults to using only ED25519.\nYou may specify up to 3 signature algorithms to use.\nEach value may be one of: `ED25519`, `HMAC_SHA_256`, `HMAC_SHA1`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
