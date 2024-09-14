import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions {
  // The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.
  ekmConnectionKeyPath?: string;

  // The URI for an external resource that this CryptoKeyVersion represents.
  externalKeyUri?: string;
}

export function kms_CryptoKeyVersionAttestationExternalProtectionLevelOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ekmConnectionKeyPath",
      'The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalKeyUri",
      "The URI for an external resource that this CryptoKeyVersion represents.",
      () => [],
      false,
      false,
    ),
  ];
}
