import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssm_ResourceDataSyncS3Destination {
  // Name of S3 bucket where the aggregated data is stored.
  bucketName?: string;

  // ARN of an encryption key for a destination in Amazon S3.
  kmsKeyArn?: string;

  // Prefix for the bucket.
  prefix?: string;

  // Region with the bucket targeted by the Resource Data Sync.
  region?: string;

  // A supported sync format. Only JsonSerDe is currently supported. Defaults to JsonSerDe.
  syncFormat?: string;
}

export function ssm_ResourceDataSyncS3Destination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "region",
      "Region with the bucket targeted by the Resource Data Sync.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncFormat",
      "A supported sync format. Only JsonSerDe is currently supported. Defaults to JsonSerDe.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Name of S3 bucket where the aggregated data is stored.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "ARN of an encryption key for a destination in Amazon S3.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Prefix for the bucket.",
      [],
      false,
      true,
    ),
  ];
}
