import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_UserProfileUserSettingsSharingSettings {
  // Whether to include the notebook cell output when sharing the notebook. The default is `Disabled`. Valid values are `Allowed` and `Disabled`.
  notebookOutputOption?: string;

  // When `notebook_output_option` is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
  s3KmsKeyId?: string;

  // When `notebook_output_option` is Allowed, the Amazon S3 bucket used to save the notebook cell output.
  s3OutputPath?: string;
}

export function sagemaker_UserProfileUserSettingsSharingSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "notebookOutputOption",
      "Whether to include the notebook cell output when sharing the notebook. The default is `Disabled`. Valid values are `Allowed` and `Disabled`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KmsKeyId",
      "When `notebook_output_option` is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3OutputPath",
      "When `notebook_output_option` is Allowed, the Amazon S3 bucket used to save the notebook cell output.",
      [],
      false,
      false,
    ),
  ];
}
