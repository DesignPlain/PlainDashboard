import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  elastictranscoder_PipelineContentConfig,
  elastictranscoder_PipelineContentConfig_GetTypes,
} from "../types/elastictranscoder_PipelineContentConfig";
import {
  elastictranscoder_PipelineNotifications,
  elastictranscoder_PipelineNotifications_GetTypes,
} from "../types/elastictranscoder_PipelineNotifications";
import {
  elastictranscoder_PipelineContentConfigPermission,
  elastictranscoder_PipelineContentConfigPermission_GetTypes,
} from "../types/elastictranscoder_PipelineContentConfigPermission";
import {
  elastictranscoder_PipelineThumbnailConfig,
  elastictranscoder_PipelineThumbnailConfig_GetTypes,
} from "../types/elastictranscoder_PipelineThumbnailConfig";
import {
  elastictranscoder_PipelineThumbnailConfigPermission,
  elastictranscoder_PipelineThumbnailConfigPermission_GetTypes,
} from "../types/elastictranscoder_PipelineThumbnailConfigPermission";

export interface PipelineArgs {
  // The permissions for the `content_config` object. (documented below)
  contentConfigPermissions?: Array<elastictranscoder_PipelineContentConfigPermission>;

  // The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files.
  outputBucket?: string;

  // The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.
  role?: string;

  // The ThumbnailConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. (documented below)
  thumbnailConfig?: elastictranscoder_PipelineThumbnailConfig;

  /*
The permissions for the `thumbnail_config` object. (documented below)

The `content_config` object specifies information about the Amazon S3 bucket in
which you want Elastic Transcoder to save transcoded files and playlists: which
bucket to use, and the storage class that you want to assign to the files. If
you specify values for `content_config`, you must also specify values for
`thumbnail_config`. If you specify values for `content_config` and
`thumbnail_config`, omit the `output_bucket` object.
*/
  thumbnailConfigPermissions?: Array<elastictranscoder_PipelineThumbnailConfigPermission>;

  // The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.
  awsKmsKeyArn?: string;

  // The ContentConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists. (documented below)
  contentConfig?: elastictranscoder_PipelineContentConfig;

  // The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.
  inputBucket?: string;

  // The name of the pipeline. Maximum 40 characters
  name?: string;

  // The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status. (documented below)
  notifications?: elastictranscoder_PipelineNotifications;
}
export class Pipeline extends DS_Resource {
  // The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.
  public awsKmsKeyArn?: string;

  // The ContentConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists. (documented below)
  public contentConfig?: elastictranscoder_PipelineContentConfig;

  // The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.
  public inputBucket?: string;

  // The name of the pipeline. Maximum 40 characters
  public name?: string;

  // The ThumbnailConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. (documented below)
  public thumbnailConfig?: elastictranscoder_PipelineThumbnailConfig;

  /*
The permissions for the `thumbnail_config` object. (documented below)

The `content_config` object specifies information about the Amazon S3 bucket in
which you want Elastic Transcoder to save transcoded files and playlists: which
bucket to use, and the storage class that you want to assign to the files. If
you specify values for `content_config`, you must also specify values for
`thumbnail_config`. If you specify values for `content_config` and
`thumbnail_config`, omit the `output_bucket` object.
*/
  public thumbnailConfigPermissions?: Array<elastictranscoder_PipelineThumbnailConfigPermission>;

  // The ARN of the Elastictranscoder pipeline.
  public arn?: string;

  // The permissions for the `content_config` object. (documented below)
  public contentConfigPermissions?: Array<elastictranscoder_PipelineContentConfigPermission>;

  // The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status. (documented below)
  public notifications?: elastictranscoder_PipelineNotifications;

  // The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files.
  public outputBucket?: string;

  // The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "contentConfig",
        "The ContentConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists. (documented below)",
        () => elastictranscoder_PipelineContentConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "inputBucket",
        "The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "notifications",
        "The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status. (documented below)",
        () => elastictranscoder_PipelineNotifications_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "outputBucket",
        "The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "thumbnailConfigPermissions",
        "The permissions for the `thumbnail_config` object. (documented below)\n\nThe `content_config` object specifies information about the Amazon S3 bucket in\nwhich you want Elastic Transcoder to save transcoded files and playlists: which\nbucket to use, and the storage class that you want to assign to the files. If\nyou specify values for `content_config`, you must also specify values for\n`thumbnail_config`. If you specify values for `content_config` and\n`thumbnail_config`, omit the `output_bucket` object.",
        () => elastictranscoder_PipelineThumbnailConfigPermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the pipeline. Maximum 40 characters",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "contentConfigPermissions",
        "The permissions for the `content_config` object. (documented below)",
        () => elastictranscoder_PipelineContentConfigPermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "thumbnailConfig",
        "The ThumbnailConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. (documented below)",
        () => elastictranscoder_PipelineThumbnailConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsKmsKeyArn",
        "The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
