import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings,
  glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings_GetTypes,
} from "../types/glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings";

export interface DataCatalogEncryptionSettingsArgs {
  // The ID of the Data Catalog to set the security configuration for. If none is provided, the AWS account ID is used by default.
  catalogId?: string;

  // The security configuration to set. see Data Catalog Encryption Settings.
  dataCatalogEncryptionSettings?: glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
}
export class DataCatalogEncryptionSettings extends Resource {
  // The ID of the Data Catalog to set the security configuration for. If none is provided, the AWS account ID is used by default.
  public catalogId?: string;

  // The security configuration to set. see Data Catalog Encryption Settings.
  public dataCatalogEncryptionSettings?: glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "The ID of the Data Catalog to set the security configuration for. If none is provided, the AWS account ID is used by default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataCatalogEncryptionSettings",
        "The security configuration to set. see Data Catalog Encryption Settings.",
        glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
