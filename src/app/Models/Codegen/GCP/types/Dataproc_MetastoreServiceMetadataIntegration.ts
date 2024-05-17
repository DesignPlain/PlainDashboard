import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig,
  Dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig_GetTypes,
} from "./Dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig";

export interface Dataproc_MetastoreServiceMetadataIntegration {
  /*
The integration config for the Data Catalog service.
Structure is documented below.
*/
  DataCatalogConfig?: Dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig;
}

export function Dataproc_MetastoreServiceMetadataIntegration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DataCatalogConfig",
      "The integration config for the Data Catalog service.\nStructure is documented below.",
      Dataproc_MetastoreServiceMetadataIntegrationDataCatalogConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
