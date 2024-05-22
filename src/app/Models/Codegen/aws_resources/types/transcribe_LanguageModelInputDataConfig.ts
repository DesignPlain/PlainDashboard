import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface transcribe_LanguageModelInputDataConfig {
  // IAM role with access to S3 bucket.
  dataAccessRoleArn?: string;

  // S3 URI where training data is located.
  s3Uri?: string;

  /*
S3 URI where tuning data is located.

The following arguments are optional:
*/
  tuningDataS3Uri?: string;
}

export function transcribe_LanguageModelInputDataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataAccessRoleArn",
      "IAM role with access to S3 bucket.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "S3 URI where training data is located.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "tuningDataS3Uri",
      "S3 URI where tuning data is located.\n\nThe following arguments are optional:",
      [],
      false,
      true,
    ),
  ];
}
