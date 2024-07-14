import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption,
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption";

export interface s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination {
  // The AWS account ID for the S3 Storage Lens configuration. Defaults to automatically determined account ID of the AWS provider.
  accountId?: string;

  // The Amazon Resource Name (ARN) of the Amazon Web Services organization.
  arn?: string;

  // Encryption of the metrics exports in this bucket. See Encryption below for more details.
  encryption?: s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption;

  // The export format. Valid values: `CSV`, `Parquet`.
  format?: string;

  // The schema version of the export file. Valid values: `V_1`.
  outputSchemaVersion?: string;

  // The prefix of the destination bucket where the metrics export will be delivered.
  prefix?: string;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The AWS account ID for the S3 Storage Lens configuration. Defaults to automatically determined account ID of the AWS provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the Amazon Web Services organization.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryption",
      "Encryption of the metrics exports in this bucket. See Encryption below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "format",
      "The export format. Valid values: `CSV`, `Parquet`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputSchemaVersion",
      "The schema version of the export file. Valid values: `V_1`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "The prefix of the destination bucket where the metrics export will be delivered.",
      [],
      false,
      false,
    ),
  ];
}
