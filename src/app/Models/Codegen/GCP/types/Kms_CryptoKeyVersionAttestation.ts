import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions,
  Kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions_GetTypes,
} from "./Kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions";
import {
  Kms_CryptoKeyVersionAttestationCertChains,
  Kms_CryptoKeyVersionAttestationCertChains_GetTypes,
} from "./Kms_CryptoKeyVersionAttestationCertChains";

export interface Kms_CryptoKeyVersionAttestation {
  /*
(Output)
The attestation data provided by the HSM when the key operation was performed.
*/
  Content?: string;

  /*
ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
Structure is documented below.
*/
  ExternalProtectionLevelOptions?: Kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions;

  /*
(Output)
The format of the attestation data.
*/
  Format?: string;

  /*
The certificate chains needed to validate the attestation
Structure is documented below.
*/
  CertChains?: Kms_CryptoKeyVersionAttestationCertChains;
}

export function Kms_CryptoKeyVersionAttestation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Content",
      "(Output)\nThe attestation data provided by the HSM when the key operation was performed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExternalProtectionLevelOptions",
      "ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.\nStructure is documented below.",
      Kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Format",
      "(Output)\nThe format of the attestation data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CertChains",
      "The certificate chains needed to validate the attestation\nStructure is documented below.",
      Kms_CryptoKeyVersionAttestationCertChains_GetTypes(),
      false,
      false,
    ),
  ];
}
