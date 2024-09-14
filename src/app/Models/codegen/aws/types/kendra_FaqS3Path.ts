import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kendra_FaqS3Path {
  /*
The name of the file.

The following arguments are optional:
*/
  key?: string;

  // The name of the S3 bucket that contains the file.
  bucket?: string;
}

export function kendra_FaqS3Path_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The name of the S3 bucket that contains the file.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The name of the file.\n\nThe following arguments are optional:",
      () => [],
      true,
      true,
    ),
  ];
}
