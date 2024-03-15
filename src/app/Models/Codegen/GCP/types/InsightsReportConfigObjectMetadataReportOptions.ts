import { InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions } from "./InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions";
import { InsightsReportConfigObjectMetadataReportOptionsStorageFilters } from "./InsightsReportConfigObjectMetadataReportOptionsStorageFilters";

export interface InsightsReportConfigObjectMetadataReportOptions {
  // The metadata fields included in an inventory report.
  MetadataFields?: Array<string>;

  /*
Options for where the inventory reports are stored.
Structure is documented below.
*/
  StorageDestinationOptions?: InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions;

  /*
A nested object resource
Structure is documented below.
*/
  StorageFilters?: InsightsReportConfigObjectMetadataReportOptionsStorageFilters;
}
