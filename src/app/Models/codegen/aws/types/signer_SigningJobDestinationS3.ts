import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface signer_SigningJobDestinationS3 {
  //
  bucket?: string;

  // An Amazon S3 object key prefix that you can use to limit signed objects keys to begin with the specified prefix.
  prefix?: string;
}

export function signer_SigningJobDestinationS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "bucket", "", () => [], true, true),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "An Amazon S3 object key prefix that you can use to limit signed objects keys to begin with the specified prefix.",
      () => [],
      false,
      true,
    ),
  ];
}
