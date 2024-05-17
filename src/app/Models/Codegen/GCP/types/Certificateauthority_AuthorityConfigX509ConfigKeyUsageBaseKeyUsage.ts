import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage {
  // The key may be used to sign certificates.
  CertSign?: boolean;

  // The key may be used to decipher only.
  DecipherOnly?: boolean;

  // The key may be used to encipher only.
  EncipherOnly?: boolean;

  // The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  ContentCommitment?: boolean;

  // The key may be used sign certificate revocation lists.
  CrlSign?: boolean;

  // The key may be used to encipher data.
  DataEncipherment?: boolean;

  // The key may be used for digital signatures.
  DigitalSignature?: boolean;

  // The key may be used in a key agreement protocol.
  KeyAgreement?: boolean;

  // The key may be used to encipher other keys.
  KeyEncipherment?: boolean;
}

export function Certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EncipherOnly",
      "The key may be used to encipher only.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ContentCommitment",
      'The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "CrlSign",
      "The key may be used sign certificate revocation lists.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DataEncipherment",
      "The key may be used to encipher data.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DigitalSignature",
      "The key may be used for digital signatures.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "KeyEncipherment",
      "The key may be used to encipher other keys.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DecipherOnly",
      "The key may be used to decipher only.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "KeyAgreement",
      "The key may be used in a key agreement protocol.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "CertSign",
      "The key may be used to sign certificates.",
      [],
      false,
      true,
    ),
  ];
}
