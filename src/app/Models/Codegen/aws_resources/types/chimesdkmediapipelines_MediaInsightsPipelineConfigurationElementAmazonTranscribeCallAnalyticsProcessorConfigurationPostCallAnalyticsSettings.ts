import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings {
  // Should output be redacted.
  contentRedactionOutput?: string;

  // ARN of the role used by AWS Transcribe to upload your post call analysis.
  dataAccessRoleArn?: string;

  // ID of the KMS key used to encrypt the output.
  outputEncryptionKmsKeyId?: string;

  // The Amazon S3 location where you want your Call Analytics post-call transcription output stored.
  outputLocation?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "outputLocation",
      "The Amazon S3 location where you want your Call Analytics post-call transcription output stored.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contentRedactionOutput",
      "Should output be redacted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataAccessRoleArn",
      "ARN of the role used by AWS Transcribe to upload your post call analysis.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputEncryptionKmsKeyId",
      "ID of the KMS key used to encrypt the output.",
      [],
      false,
      false,
    ),
  ];
}
