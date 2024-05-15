import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions,
  Storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions_GetTypes,
} from "./Storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions";
import {
  Storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters,
  Storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters_GetTypes,
} from "./Storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters";

export interface Storage_InsightsReportConfigObjectMetadataReportOptions {
  // The metadata fields included in an inventory report.
  MetadataFields?: Array<string>;

  /*
Options for where the inventory reports are stored.
Structure is documented below.
*/
  StorageDestinationOptions?: Storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions;

  /*
A nested object resource
Structure is documented below.
*/
  StorageFilters?: Storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters;
}

export function Storage_InsightsReportConfigObjectMetadataReportOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "StorageFilters",
      "A nested object resource\nStructure is documented below.",
      Storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MetadataFields",
      "The metadata fields included in an inventory report.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StorageDestinationOptions",
      "Options for where the inventory reports are stored.\nStructure is documented below.",
      Storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions_GetTypes(),
      true,
      false,
    ),
  ];
}
