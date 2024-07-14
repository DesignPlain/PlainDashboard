import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig,
  dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig_GetTypes,
} from "./dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig";

export interface dataproc_MetastoreServiceMetadataIntegration {
  /*
The integration config for the Data Catalog service.
Structure is documented below.
*/
  dataCatalogConfig?: dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig;
}

export function dataproc_MetastoreServiceMetadataIntegration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dataCatalogConfig",
      "The integration config for the Data Catalog service.\nStructure is documented below.",
      dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
