import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage {
  // The key may be used to encipher data.
  dataEncipherment?: boolean;

  // The key may be used in a key agreement protocol.
  keyAgreement?: boolean;

  // The key may be used sign certificate revocation lists.
  crlSign?: boolean;

  // The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  contentCommitment?: boolean;

  // The key may be used to decipher only.
  decipherOnly?: boolean;

  // The key may be used for digital signatures.
  digitalSignature?: boolean;

  // The key may be used to encipher only.
  encipherOnly?: boolean;

  // The key may be used to encipher other keys.
  keyEncipherment?: boolean;

  // The key may be used to sign certificates.
  certSign?: boolean;
}

export function certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "dataEncipherment",
      "The key may be used to encipher data.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "keyAgreement",
      "The key may be used in a key agreement protocol.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "contentCommitment",
      'The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "encipherOnly",
      "The key may be used to encipher only.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "keyEncipherment",
      "The key may be used to encipher other keys.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "crlSign",
      "The key may be used sign certificate revocation lists.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "decipherOnly",
      "The key may be used to decipher only.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "digitalSignature",
      "The key may be used for digital signatures.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "certSign",
      "The key may be used to sign certificates.",
      [],
      true,
      false,
    ),
  ];
}
