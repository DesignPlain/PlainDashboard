import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output,
  sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output_GetTypes,
} from './sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output';

export interface sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs {
  // The Amazon S3 storage location where the results of a monitoring job are saved. Fields are documented below.
  s3Output?: sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3Output',
      'The Amazon S3 storage location where the results of a monitoring job are saved. Fields are documented below.',
      () =>
        sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output_GetTypes(),
      true,
      true,
    ),
  ];
}
