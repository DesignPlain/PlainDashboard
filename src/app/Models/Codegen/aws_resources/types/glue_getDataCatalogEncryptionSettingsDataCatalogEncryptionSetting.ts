import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest,
  glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest_GetTypes,
} from "./glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest";
import {
  glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption,
  glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption_GetTypes,
} from "./glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption";

export interface glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSetting {
  // When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties. You can enable catalog encryption or only password encryption. see Connection Password Encryption.
  connectionPasswordEncryptions?: Array<glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption>;

  // Encryption-at-rest configuration for the Data Catalog. see Encryption At Rest.
  encryptionAtRests?: Array<glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest>;
}

export function glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "connectionPasswordEncryptions",
      "When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties. You can enable catalog encryption or only password encryption. see Connection Password Encryption.",
      glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "encryptionAtRests",
      "Encryption-at-rest configuration for the Data Catalog. see Encryption At Rest.",
      glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest_GetTypes(),
      true,
      false,
    ),
  ];
}
