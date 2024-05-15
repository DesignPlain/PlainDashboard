import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterDatabaseEncryption {
  // The key to use to encrypt/decrypt secrets.
  KeyName?: string;

  // ENCRYPTED or DECRYPTED.
  State?: string;
}

export function Container_getClusterDatabaseEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KeyName",
      "The key to use to encrypt/decrypt secrets.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "ENCRYPTED or DECRYPTED.",
      [],
      true,
      false,
    ),
  ];
}
