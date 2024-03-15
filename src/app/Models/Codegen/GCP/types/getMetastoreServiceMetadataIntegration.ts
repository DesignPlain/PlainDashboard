import { getMetastoreServiceMetadataIntegrationDataCatalogConfig } from "./getMetastoreServiceMetadataIntegrationDataCatalogConfig";

export interface getMetastoreServiceMetadataIntegration {
  // The integration config for the Data Catalog service.
  DataCatalogConfigs?: Array<getMetastoreServiceMetadataIntegrationDataCatalogConfig>;
}
