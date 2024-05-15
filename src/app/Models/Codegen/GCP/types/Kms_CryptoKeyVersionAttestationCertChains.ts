import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Kms_CryptoKeyVersionAttestationCertChains {
  // Cavium certificate chain corresponding to the attestation.
  CaviumCerts?: string;

  // Google card certificate chain corresponding to the attestation.
  GoogleCardCerts?: string;

  // Google partition certificate chain corresponding to the attestation.
  GooglePartitionCerts?: string;
}

export function Kms_CryptoKeyVersionAttestationCertChains_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CaviumCerts",
      "Cavium certificate chain corresponding to the attestation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GoogleCardCerts",
      "Google card certificate chain corresponding to the attestation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GooglePartitionCerts",
      "Google partition certificate chain corresponding to the attestation.",
      [],
      false,
      false,
    ),
  ];
}
