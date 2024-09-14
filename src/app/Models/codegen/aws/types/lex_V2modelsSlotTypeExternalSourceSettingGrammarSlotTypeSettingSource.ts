import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource {
  // KMS key required to decrypt the contents of the grammar, if any.
  kmsKeyArn?: string;

  // Name of the Amazon S3 bucket that contains the grammar source.
  s3BucketName?: string;

  // Path to the grammar in the Amazon S3 bucket.
  s3ObjectKey?: string;
}

export function lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3ObjectKey",
      "Path to the grammar in the Amazon S3 bucket.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "KMS key required to decrypt the contents of the grammar, if any.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "Name of the Amazon S3 bucket that contains the grammar source.",
      () => [],
      true,
      false,
    ),
  ];
}
