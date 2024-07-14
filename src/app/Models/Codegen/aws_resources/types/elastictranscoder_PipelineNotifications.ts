import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elastictranscoder_PipelineNotifications {
  // The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing a job in this pipeline.
  completed?: string;

  // The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition while processing a job in this pipeline.
  error?: string;

  // The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process a job in this pipeline.
  progressing?: string;

  /*
The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition while processing a job in this pipeline.

The `thumbnail_config` object specifies information about the Amazon S3 bucket in
which you want Elastic Transcoder to save thumbnail files: which bucket to use,
which users you want to have access to the files, the type of access you want
users to have, and the storage class that you want to assign to the files. If
you specify values for `content_config`, you must also specify values for
`thumbnail_config` even if you don't want to create thumbnails. (You control
whether to create thumbnails when you create a job. For more information, see
ThumbnailPattern in the topic Create Job.) If you specify values for
`content_config` and `thumbnail_config`, omit the OutputBucket object.
*/
  warning?: string;
}

export function elastictranscoder_PipelineNotifications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "completed",
      "The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing a job in this pipeline.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "error",
      "The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition while processing a job in this pipeline.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "progressing",
      "The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process a job in this pipeline.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "warning",
      "The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition while processing a job in this pipeline.\n\nThe `thumbnail_config` object specifies information about the Amazon S3 bucket in\nwhich you want Elastic Transcoder to save thumbnail files: which bucket to use,\nwhich users you want to have access to the files, the type of access you want\nusers to have, and the storage class that you want to assign to the files. If\nyou specify values for `content_config`, you must also specify values for\n`thumbnail_config` even if you don't want to create thumbnails. (You control\nwhether to create thumbnails when you create a job. For more information, see\nThumbnailPattern in the topic Create Job.) If you specify values for\n`content_config` and `thumbnail_config`, omit the OutputBucket object.",
      [],
      false,
      false,
    ),
  ];
}
