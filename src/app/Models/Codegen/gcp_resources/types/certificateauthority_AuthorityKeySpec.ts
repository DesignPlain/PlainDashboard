import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface certificateauthority_AuthorityKeySpec {
  /*
The algorithm to use for creating a managed Cloud KMS key for a for a simplified
experience. All managed keys will be have their ProtectionLevel as HSM.
Possible values are: `SIGN_HASH_ALGORITHM_UNSPECIFIED`, `RSA_PSS_2048_SHA256`, `RSA_PSS_3072_SHA256`, `RSA_PSS_4096_SHA256`, `RSA_PKCS1_2048_SHA256`, `RSA_PKCS1_3072_SHA256`, `RSA_PKCS1_4096_SHA256`, `EC_P256_SHA256`, `EC_P384_SHA384`.

- - -
*/
  algorithm?: string;

  /*
The resource name for an existing Cloud KMS CryptoKeyVersion in the format
`projects/-/locations/-/keyRings/-/cryptoKeys/-/cryptoKeyVersions/-`.
*/
  cloudKmsKeyVersion?: string;
}

export function certificateauthority_AuthorityKeySpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "algorithm",
      "The algorithm to use for creating a managed Cloud KMS key for a for a simplified\nexperience. All managed keys will be have their ProtectionLevel as HSM.\nPossible values are: `SIGN_HASH_ALGORITHM_UNSPECIFIED`, `RSA_PSS_2048_SHA256`, `RSA_PSS_3072_SHA256`, `RSA_PSS_4096_SHA256`, `RSA_PKCS1_2048_SHA256`, `RSA_PKCS1_3072_SHA256`, `RSA_PKCS1_4096_SHA256`, `EC_P256_SHA256`, `EC_P384_SHA384`.\n\n- - -",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudKmsKeyVersion",
      "The resource name for an existing Cloud KMS CryptoKeyVersion in the format\n`projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`.",
      [],
      false,
      true,
    ),
  ];
}
