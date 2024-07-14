import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kms_getSecretsSecret {
  /*
Specifies the KMS key that AWS KMS uses to decrypt the ciphertext. This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key.

For more information on `context` and `grant_tokens` see the [KMS
Concepts](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html)
*/
  keyId?: string;

  // Name to export this secret under in the attributes.
  name?: string;

  // Base64 encoded payload, as returned from a KMS encrypt operation.
  payload?: string;

  // An optional mapping that makes up the Encryption Context for the secret.
  context?: Map<string, string>;

  // The encryption algorithm that will be used to decrypt the ciphertext. This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key. Valid Values: SYMMETRIC_DEFAULT | RSAES_OAEP_SHA_1 | RSAES_OAEP_SHA_256 | SM2PKE
  encryptionAlgorithm?: string;

  // An optional list of Grant Tokens for the secret.
  grantTokens?: Array<string>;
}

export function kms_getSecretsSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "grantTokens",
      "An optional list of Grant Tokens for the secret.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyId",
      "Specifies the KMS key that AWS KMS uses to decrypt the ciphertext. This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key.\n\nFor more information on `context` and `grant_tokens` see the [KMS\nConcepts](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name to export this secret under in the attributes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "payload",
      "Base64 encoded payload, as returned from a KMS encrypt operation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "context",
      "An optional mapping that makes up the Encryption Context for the secret.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionAlgorithm",
      "The encryption algorithm that will be used to decrypt the ciphertext. This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key. Valid Values: SYMMETRIC_DEFAULT | RSAES_OAEP_SHA_1 | RSAES_OAEP_SHA_256 | SM2PKE",
      [],
      false,
      false,
    ),
  ];
}
