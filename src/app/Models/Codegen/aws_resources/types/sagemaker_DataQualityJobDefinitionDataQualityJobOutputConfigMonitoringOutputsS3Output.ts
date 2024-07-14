import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output {
  // Path to the filesystem where the batch transform data is available to the container. Defaults to `/opt/ml/processing/input`.
  localPath?: string;

  // Whether to upload the results of the monitoring job continuously or after the job completes. Valid values are `Continuous` or `EndOfJob`
  s3UploadMode?: string;

  // The Amazon S3 URI for the constraints resource.
  s3Uri?: string;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "localPath",
      "Path to the filesystem where the batch transform data is available to the container. Defaults to `/opt/ml/processing/input`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3UploadMode",
      "Whether to upload the results of the monitoring job continuously or after the job completes. Valid values are `Continuous` or `EndOfJob`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "The Amazon S3 URI for the constraints resource.",
      [],
      true,
      true,
    ),
  ];
}
