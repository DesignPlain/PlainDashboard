import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface comprehend_DocumentClassifierOutputDataConfig {
  /*
KMS Key used to encrypt the output documents.
Can be a KMS Key ID, a KMS Key ARN, a KMS Alias name, or a KMS Alias ARN.
*/
  kmsKeyId?: string;

  // Full path for the output documents.
  outputS3Uri?: string;

  /*
Destination path for the output documents.
The full path to the output file will be returned in `output_s3_uri`.
*/
  s3Uri?: string;
}

export function comprehend_DocumentClassifierOutputDataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "KMS Key used to encrypt the output documents.\nCan be a KMS Key ID, a KMS Key ARN, a KMS Alias name, or a KMS Alias ARN.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputS3Uri",
      "Full path for the output documents.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "Destination path for the output documents.\nThe full path to the output file will be returned in `output_s3_uri`.",
      () => [],
      true,
      false,
    ),
  ];
}
