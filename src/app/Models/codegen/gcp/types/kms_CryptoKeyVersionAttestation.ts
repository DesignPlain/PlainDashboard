import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kms_CryptoKeyVersionAttestationCertChains,
  kms_CryptoKeyVersionAttestationCertChains_GetTypes,
} from './kms_CryptoKeyVersionAttestationCertChains';
import {
  kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions,
  kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions_GetTypes,
} from './kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions';

export interface kms_CryptoKeyVersionAttestation {
  /*
(Output)
The format of the attestation data.
*/
  format?: string;

  /*
The certificate chains needed to validate the attestation
Structure is documented below.
*/
  certChains?: kms_CryptoKeyVersionAttestationCertChains;

  /*
(Output)
The attestation data provided by the HSM when the key operation was performed.
*/
  content?: string;

  /*
ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
Structure is documented below.
*/
  externalProtectionLevelOptions?: kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions;
}

export function kms_CryptoKeyVersionAttestation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'format',
      '(Output)\nThe format of the attestation data.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'certChains',
      'The certificate chains needed to validate the attestation\nStructure is documented below.',
      () => kms_CryptoKeyVersionAttestationCertChains_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'content',
      '(Output)\nThe attestation data provided by the HSM when the key operation was performed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'externalProtectionLevelOptions',
      'ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.\nStructure is documented below.',
      () =>
        kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
