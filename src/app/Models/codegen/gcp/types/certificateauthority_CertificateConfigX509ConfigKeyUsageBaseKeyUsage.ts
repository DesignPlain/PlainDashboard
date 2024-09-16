import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage {
  // The key may be used to encipher data.
  dataEncipherment?: boolean;

  // The key may be used to decipher only.
  decipherOnly?: boolean;

  // The key may be used for digital signatures.
  digitalSignature?: boolean;

  // The key may be used to encipher only.
  encipherOnly?: boolean;

  // The key may be used to sign certificates.
  certSign?: boolean;

  // The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  contentCommitment?: boolean;

  // The key may be used sign certificate revocation lists.
  crlSign?: boolean;

  // The key may be used in a key agreement protocol.
  keyAgreement?: boolean;

  // The key may be used to encipher other keys.
  keyEncipherment?: boolean;
}

export function certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'dataEncipherment',
      'The key may be used to encipher data.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'certSign',
      'The key may be used to sign certificates.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'crlSign',
      'The key may be used sign certificate revocation lists.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'keyAgreement',
      'The key may be used in a key agreement protocol.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'keyEncipherment',
      'The key may be used to encipher other keys.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'decipherOnly',
      'The key may be used to decipher only.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'digitalSignature',
      'The key may be used for digital signatures.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'encipherOnly',
      'The key may be used to encipher only.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'contentCommitment',
      'The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".',
      () => [],
      false,
      true,
    ),
  ];
}
