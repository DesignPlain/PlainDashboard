import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterDatabaseEncryption {
  // The key to use to encrypt/decrypt secrets.
  keyName?: string;

  // ENCRYPTED or DECRYPTED.
  state?: string;
}

export function container_getClusterDatabaseEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "ENCRYPTED or DECRYPTED.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyName",
      "The key to use to encrypt/decrypt secrets.",
      [],
      true,
      false,
    ),
  ];
}
