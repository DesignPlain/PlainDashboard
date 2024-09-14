import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssm_AssociationOutputLocation {
  // The S3 bucket name.
  s3BucketName?: string;

  // The S3 bucket prefix. Results stored in the root if not configured.
  s3KeyPrefix?: string;

  /*
The S3 bucket region.

Targets specify what instance IDs or tags to apply the document to and has these keys:
*/
  s3Region?: string;
}

export function ssm_AssociationOutputLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "The S3 bucket name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KeyPrefix",
      "The S3 bucket prefix. Results stored in the root if not configured.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Region",
      "The S3 bucket region.\n\nTargets specify what instance IDs or tags to apply the document to and has these keys:",
      () => [],
      false,
      false,
    ),
  ];
}
