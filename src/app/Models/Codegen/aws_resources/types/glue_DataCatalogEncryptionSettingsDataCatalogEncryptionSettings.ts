import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest,
  glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest_GetTypes,
} from "./glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest";
import {
  glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption,
  glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption_GetTypes,
} from "./glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption";

export interface glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
  // Specifies the encryption-at-rest configuration for the Data Catalog. see Encryption At Rest.
  encryptionAtRest?: glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;

  // When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties. You can enable catalog encryption or only password encryption. see Connection Password Encryption.
  connectionPasswordEncryption?: glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
}

export function glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "encryptionAtRest",
      "Specifies the encryption-at-rest configuration for the Data Catalog. see Encryption At Rest.",
      glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "connectionPasswordEncryption",
      "When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties. You can enable catalog encryption or only password encryption. see Connection Password Encryption.",
      glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption_GetTypes(),
      true,
      false,
    ),
  ];
}
