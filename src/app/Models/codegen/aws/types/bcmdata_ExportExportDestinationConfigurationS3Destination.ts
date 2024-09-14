import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bcmdata_ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration,
  bcmdata_ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration_GetTypes,
} from "./bcmdata_ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration";

export interface bcmdata_ExportExportDestinationConfigurationS3Destination {
  // Output configuration for the data export. See the `s3_output_configurations` argument reference below.
  s3OutputConfigurations?: Array<bcmdata_ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration>;

  // S3 path prefix you want prepended to the name of your data export.
  s3Prefix?: string;

  // S3 bucket region.
  s3Region?: string;

  // Name of the Amazon S3 bucket used as the destination of a data export file.
  s3Bucket?: string;
}

export function bcmdata_ExportExportDestinationConfigurationS3Destination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3Region",
      "S3 bucket region.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Bucket",
      "Name of the Amazon S3 bucket used as the destination of a data export file.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "s3OutputConfigurations",
      "Output configuration for the data export. See the `s3_output_configurations` argument reference below.",
      () =>
        bcmdata_ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Prefix",
      "S3 path prefix you want prepended to the name of your data export.",
      () => [],
      true,
      false,
    ),
  ];
}
