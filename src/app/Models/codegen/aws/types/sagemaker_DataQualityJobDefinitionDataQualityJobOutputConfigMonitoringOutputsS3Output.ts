import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output {
  // A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
  s3Uri?: string;

  // The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data. Defaults to `/opt/ml/processing/output`.
  localPath?: string;

  // Whether to upload the results of the monitoring job continuously or after the job completes. Valid values are `Continuous` or `EndOfJob`
  s3UploadMode?: string;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "localPath",
      "The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data. Defaults to `/opt/ml/processing/output`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3UploadMode",
      "Whether to upload the results of the monitoring job continuously or after the job completes. Valid values are `Continuous` or `EndOfJob`",
      () => [],
      false,
      true,
    ),
  ];
}
