import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs,
  sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs_GetTypes,
} from "./sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs";

export interface sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig {
  // The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
  kmsKeyId?: string;

  // Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. Fields are documented below.
  monitoringOutputs?: sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "monitoringOutputs",
      "Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. Fields are documented below.",
      () =>
        sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs_GetTypes(),
      true,
      true,
    ),
  ];
}
