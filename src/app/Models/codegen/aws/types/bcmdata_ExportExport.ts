import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bcmdata_ExportExportRefreshCadence,
  bcmdata_ExportExportRefreshCadence_GetTypes,
} from "./bcmdata_ExportExportRefreshCadence";
import {
  bcmdata_ExportExportDataQuery,
  bcmdata_ExportExportDataQuery_GetTypes,
} from "./bcmdata_ExportExportDataQuery";
import {
  bcmdata_ExportExportDestinationConfiguration,
  bcmdata_ExportExportDestinationConfiguration_GetTypes,
} from "./bcmdata_ExportExportDestinationConfiguration";

export interface bcmdata_ExportExport {
  // Data query for this specific data export. See the `data_query` argument reference below.
  dataQueries?: Array<bcmdata_ExportExportDataQuery>;

  // Description for this specific data export.
  description?: string;

  // Destination configuration for this specific data export. See the `destination_configurations` argument reference below.
  destinationConfigurations?: Array<bcmdata_ExportExportDestinationConfiguration>;

  // Amazon Resource Name (ARN) for this export.
  exportArn?: string;

  // Name of this specific data export.
  name?: string;

  // Cadence for Amazon Web Services to update the export in your S3 bucket. See the `refresh_cadence` argument reference below.
  refreshCadences?: Array<bcmdata_ExportExportRefreshCadence>;
}

export function bcmdata_ExportExport_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dataQueries",
      "Data query for this specific data export. See the `data_query` argument reference below.",
      () => bcmdata_ExportExportDataQuery_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description for this specific data export.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationConfigurations",
      "Destination configuration for this specific data export. See the `destination_configurations` argument reference below.",
      () => bcmdata_ExportExportDestinationConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exportArn",
      "Amazon Resource Name (ARN) for this export.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of this specific data export.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "refreshCadences",
      "Cadence for Amazon Web Services to update the export in your S3 bucket. See the `refresh_cadence` argument reference below.",
      () => bcmdata_ExportExportRefreshCadence_GetTypes(),
      false,
      false,
    ),
  ];
}
