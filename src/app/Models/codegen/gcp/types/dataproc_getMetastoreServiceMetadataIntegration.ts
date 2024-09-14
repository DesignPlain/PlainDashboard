import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig,
  dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig_GetTypes,
} from "./dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig";

export interface dataproc_getMetastoreServiceMetadataIntegration {
  // The integration config for the Data Catalog service.
  dataCatalogConfigs?: Array<dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig>;
}

export function dataproc_getMetastoreServiceMetadataIntegration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dataCatalogConfigs",
      "The integration config for the Data Catalog service.",
      () =>
        dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
