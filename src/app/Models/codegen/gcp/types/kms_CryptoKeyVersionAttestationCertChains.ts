import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kms_CryptoKeyVersionAttestationCertChains {
  // Cavium certificate chain corresponding to the attestation.
  caviumCerts?: string;

  // Google card certificate chain corresponding to the attestation.
  googleCardCerts?: string;

  // Google partition certificate chain corresponding to the attestation.
  googlePartitionCerts?: string;
}

export function kms_CryptoKeyVersionAttestationCertChains_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'caviumCerts',
      'Cavium certificate chain corresponding to the attestation.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'googleCardCerts',
      'Google card certificate chain corresponding to the attestation.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'googlePartitionCerts',
      'Google partition certificate chain corresponding to the attestation.',
      () => [],
      false,
      false,
    ),
  ];
}
