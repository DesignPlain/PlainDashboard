import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkservices_EdgeCacheKeysetValidationSharedKey {
  /*
The name of the secret version in Secret Manager.
The resource name of the secret version must be in the format `projects/-/secrets/-/versions/-` where the `-` values are replaced by the secrets themselves.
The secrets must be at least 16 bytes large.  The recommended secret size depends on the signature algorithm you are using.
- If you are using HMAC-SHA1, we suggest 20-byte secrets.
- If you are using HMAC-SHA256, we suggest 32-byte secrets.
See RFC 2104, Section 3 for more details on these recommendations.
*/
  secretVersion?: string;
}

export function networkservices_EdgeCacheKeysetValidationSharedKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'secretVersion',
      'The name of the secret version in Secret Manager.\nThe resource name of the secret version must be in the format `projects/*/secrets/*/versions/*` where the `*` values are replaced by the secrets themselves.\nThe secrets must be at least 16 bytes large.  The recommended secret size depends on the signature algorithm you are using.\n* If you are using HMAC-SHA1, we suggest 20-byte secrets.\n* If you are using HMAC-SHA256, we suggest 32-byte secrets.\nSee RFC 2104, Section 3 for more details on these recommendations.',
      () => [],
      true,
      false,
    ),
  ];
}
