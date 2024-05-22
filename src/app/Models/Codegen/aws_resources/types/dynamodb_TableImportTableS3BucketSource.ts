import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dynamodb_TableImportTableS3BucketSource {
  // The S3 bucket that is being imported from.
  bucket?: string;

  // The account number of the S3 bucket that is being imported from.
  bucketOwner?: string;

  // The key prefix shared by all S3 Objects that are being imported.
  keyPrefix?: string;
}

export function dynamodb_TableImportTableS3BucketSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The S3 bucket that is being imported from.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketOwner",
      "The account number of the S3 bucket that is being imported from.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyPrefix",
      "The key prefix shared by all S3 Objects that are being imported.",
      [],
      false,
      false,
    ),
  ];
}
