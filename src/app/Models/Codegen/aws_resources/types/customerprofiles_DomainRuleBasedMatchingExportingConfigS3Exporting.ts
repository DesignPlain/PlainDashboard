import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface customerprofiles_DomainRuleBasedMatchingExportingConfigS3Exporting {
  // The name of the S3 bucket where Identity Resolution Jobs write result files.
  s3BucketName?: string;

  // The S3 key name of the location where Identity Resolution Jobs write result files.
  s3KeyName?: string;
}

export function customerprofiles_DomainRuleBasedMatchingExportingConfigS3Exporting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "The name of the S3 bucket where Identity Resolution Jobs write result files.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KeyName",
      "The S3 key name of the location where Identity Resolution Jobs write result files.",
      [],
      false,
      false,
    ),
  ];
}
