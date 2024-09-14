import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_DataQualityJobDefinitionJobResourcesClusterConfig {
  // The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1.
  instanceCount?: number;

  // The ML compute instance type for the processing job.
  instanceType?: string;

  // The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
  volumeKmsKeyId?: string;

  // The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
  volumeSizeInGb?: number;
}

export function sagemaker_DataQualityJobDefinitionJobResourcesClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "The ML compute instance type for the processing job.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeKmsKeyId",
      "The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSizeInGb",
      "The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "instanceCount",
      "The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1.",
      () => [],
      true,
      true,
    ),
  ];
}
