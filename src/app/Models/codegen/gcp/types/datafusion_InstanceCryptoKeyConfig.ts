import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface datafusion_InstanceCryptoKeyConfig {
  // The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of projects/-/locations/-/keyRings/-/cryptoKeys/-.
  keyReference?: string;
}

export function datafusion_InstanceCryptoKeyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keyReference",
      "The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of projects/*/locations/*/keyRings/*/cryptoKeys/*.",
      () => [],
      true,
      true,
    ),
  ];
}
