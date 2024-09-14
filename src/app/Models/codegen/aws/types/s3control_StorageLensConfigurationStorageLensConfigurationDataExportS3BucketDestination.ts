import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption,
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption";

export interface s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination {
  // The export format. Valid values: `CSV`, `Parquet`.
  format?: string;

  // The schema version of the export file. Valid values: `V_1`.
  outputSchemaVersion?: string;

  // The prefix of the destination bucket where the metrics export will be delivered.
  prefix?: string;

  // The account ID of the owner of the S3 Storage Lens metrics export bucket.
  accountId?: string;

  // The Amazon Resource Name (ARN) of the bucket.
  arn?: string;

  // Encryption of the metrics exports in this bucket. See Encryption below for more details.
  encryption?: s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "format",
      "The export format. Valid values: `CSV`, `Parquet`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputSchemaVersion",
      "The schema version of the export file. Valid values: `V_1`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "The prefix of the destination bucket where the metrics export will be delivered.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The account ID of the owner of the S3 Storage Lens metrics export bucket.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the bucket.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryption",
      "Encryption of the metrics exports in this bucket. See Encryption below for more details.",
      () =>
        s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption_GetTypes(),
      false,
      false,
    ),
  ];
}
