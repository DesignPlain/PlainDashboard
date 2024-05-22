import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface signer_SigningJobDestinationS3 {
  // An Amazon S3 object key prefix that you can use to limit signed objects keys to begin with the specified prefix.
  prefix?: string;

  // Name of the S3 bucket.
  bucket?: string;
}

export function signer_SigningJobDestinationS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "An Amazon S3 object key prefix that you can use to limit signed objects keys to begin with the specified prefix.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of the S3 bucket.",
      [],
      true,
      true,
    ),
  ];
}
