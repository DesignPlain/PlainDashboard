import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig,
  Dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig_GetTypes,
} from "./Dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig";

export interface Dataproc_getMetastoreServiceMetadataIntegration {
  // The integration config for the Data Catalog service.
  DataCatalogConfigs?: Array<Dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig>;
}

export function Dataproc_getMetastoreServiceMetadataIntegration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "DataCatalogConfigs",
      "The integration config for the Data Catalog service.",
      Dataproc_getMetastoreServiceMetadataIntegrationDataCatalogConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
