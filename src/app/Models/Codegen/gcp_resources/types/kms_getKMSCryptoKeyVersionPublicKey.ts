import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kms_getKMSCryptoKeyVersionPublicKey {
  // The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
  algorithm?: string;

  // The public key, encoded in PEM format. For more information, see the RFC 7468 sections for General Considerations and Textual Encoding of Subject Public Key Info.
  pem?: string;
}

export function kms_getKMSCryptoKeyVersionPublicKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "algorithm",
      "The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pem",
      "The public key, encoded in PEM format. For more information, see the RFC 7468 sections for General Considerations and Textual Encoding of Subject Public Key Info.",
      [],
      true,
      false,
    ),
  ];
}
