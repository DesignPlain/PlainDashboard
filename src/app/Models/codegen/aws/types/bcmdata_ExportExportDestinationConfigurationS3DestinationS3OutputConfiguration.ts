import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bcmdata_ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration {
  // The rule to follow when generating a version of the data export file. You have the choice to overwrite the previous version or to be delivered in addition to the previous versions. Overwriting exports can save on Amazon S3 storage costs. Creating new export versions allows you to track the changes in cost and usage data over time. Valid values `CREATE_NEW_REPORT` or `OVERWRITE_REPORT`.
  overwrite?: string;

  // Compression type for the data export. Valid values `GZIP`, `PARQUET`.
  compression?: string;

  // File format for the data export. Valid values `TEXT_OR_CSV` or `PARQUET`.
  format?: string;

  // Output type for the data export. Valid value `CUSTOM`.
  outputType?: string;
}

export function bcmdata_ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "format",
      "File format for the data export. Valid values `TEXT_OR_CSV` or `PARQUET`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputType",
      "Output type for the data export. Valid value `CUSTOM`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "overwrite",
      "The rule to follow when generating a version of the data export file. You have the choice to overwrite the previous version or to be delivered in addition to the previous versions. Overwriting exports can save on Amazon S3 storage costs. Creating new export versions allows you to track the changes in cost and usage data over time. Valid values `CREATE_NEW_REPORT` or `OVERWRITE_REPORT`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "compression",
      "Compression type for the data export. Valid values `GZIP`, `PARQUET`.",
      () => [],
      true,
      false,
    ),
  ];
}
