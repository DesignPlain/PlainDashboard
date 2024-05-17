import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_getAuthorityKeySpec {
  /*
The algorithm to use for creating a managed Cloud KMS key for a for a simplified
experience. All managed keys will be have their ProtectionLevel as HSM. Possible values: ["SIGN_HASH_ALGORITHM_UNSPECIFIED", "RSA_PSS_2048_SHA256", "RSA_PSS_3072_SHA256", "RSA_PSS_4096_SHA256", "RSA_PKCS1_2048_SHA256", "RSA_PKCS1_3072_SHA256", "RSA_PKCS1_4096_SHA256", "EC_P256_SHA256", "EC_P384_SHA384"]
*/
  Algorithm?: string;

  /*
The resource name for an existing Cloud KMS CryptoKeyVersion in the format
'projects/-/locations/-/keyRings/-/cryptoKeys/-/cryptoKeyVersions/-'.
*/
  CloudKmsKeyVersion?: string;
}

export function Certificateauthority_getAuthorityKeySpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Algorithm",
      'The algorithm to use for creating a managed Cloud KMS key for a for a simplified\nexperience. All managed keys will be have their ProtectionLevel as HSM. Possible values: ["SIGN_HASH_ALGORITHM_UNSPECIFIED", "RSA_PSS_2048_SHA256", "RSA_PSS_3072_SHA256", "RSA_PSS_4096_SHA256", "RSA_PKCS1_2048_SHA256", "RSA_PKCS1_3072_SHA256", "RSA_PKCS1_4096_SHA256", "EC_P256_SHA256", "EC_P384_SHA384"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CloudKmsKeyVersion",
      "The resource name for an existing Cloud KMS CryptoKeyVersion in the format\n'projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*'.",
      [],
      true,
      false,
    ),
  ];
}
