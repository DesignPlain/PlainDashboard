import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kendra_getThesaurusSourceS3Path {
  // Name of the S3 bucket that contains the file.
  bucket?: string;

  // Name of the file.
  key?: string;
}

export function kendra_getThesaurusSourceS3Path_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of the S3 bucket that contains the file.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Name of the file.",
      () => [],
      true,
      false,
    ),
  ];
}
