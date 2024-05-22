import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_PipelinePipelineDefinitionS3Location {
  // Name of the S3 bucket.
  bucket?: string;

  // The object key (or key name) uniquely identifies the object in an S3 bucket.
  objectKey?: string;

  // Version Id of the pipeline definition file. If not specified, Amazon SageMaker will retrieve the latest version.
  versionId?: string;
}

export function sagemaker_PipelinePipelineDefinitionS3Location_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "objectKey",
      "The object key (or key name) uniquely identifies the object in an S3 bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "versionId",
      "Version Id of the pipeline definition file. If not specified, Amazon SageMaker will retrieve the latest version.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of the S3 bucket.",
      [],
      true,
      false,
    ),
  ];
}
