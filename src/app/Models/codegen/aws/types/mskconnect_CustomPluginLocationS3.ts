import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mskconnect_CustomPluginLocationS3 {
  // The version of an object in an S3 bucket.
  objectVersion?: string;

  // The Amazon Resource Name (ARN) of an S3 bucket.
  bucketArn?: string;

  // The file key for an object in an S3 bucket.
  fileKey?: string;
}

export function mskconnect_CustomPluginLocationS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "objectVersion",
      "The version of an object in an S3 bucket.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketArn",
      "The Amazon Resource Name (ARN) of an S3 bucket.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileKey",
      "The file key for an object in an S3 bucket.",
      () => [],
      true,
      true,
    ),
  ];
}
