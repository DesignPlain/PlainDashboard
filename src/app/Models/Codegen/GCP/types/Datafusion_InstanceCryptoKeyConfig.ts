import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datafusion_InstanceCryptoKeyConfig {
  // The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of projects/-/locations/-/keyRings/-/cryptoKeys/-.
  KeyReference?: string;
}

export function Datafusion_InstanceCryptoKeyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KeyReference",
      "The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of projects/*/locations/*/keyRings/*/cryptoKeys/*.",
      [],
      true,
      true,
    ),
  ];
}
