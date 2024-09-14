import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface customerprofiles_DomainMatchingExportingConfigS3Exporting {
  // The S3 key name of the location where Identity Resolution Jobs write result files.
  s3KeyName?: string;

  // The name of the S3 bucket where Identity Resolution Jobs write result files.
  s3BucketName?: string;
}

export function customerprofiles_DomainMatchingExportingConfigS3Exporting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3KeyName",
      "The S3 key name of the location where Identity Resolution Jobs write result files.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "The name of the S3 bucket where Identity Resolution Jobs write result files.",
      () => [],
      true,
      false,
    ),
  ];
}
