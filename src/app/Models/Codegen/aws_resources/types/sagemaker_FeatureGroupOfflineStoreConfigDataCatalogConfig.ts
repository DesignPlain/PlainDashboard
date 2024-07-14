import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_FeatureGroupOfflineStoreConfigDataCatalogConfig {
  // The name of the Glue table catalog.
  catalog?: string;

  // The name of the Glue table database.
  database?: string;

  // The name of the Glue table.
  tableName?: string;
}

export function sagemaker_FeatureGroupOfflineStoreConfigDataCatalogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "database",
      "The name of the Glue table database.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "The name of the Glue table.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalog",
      "The name of the Glue table catalog.",
      [],
      false,
      true,
    ),
  ];
}
