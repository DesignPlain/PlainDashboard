import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_ModelContainerModelDataSourceS3DataSource {
  // How the model data is prepared. Allowed values are: `None` and `Gzip`.
  compressionType?: string;

  // The type of model data to deploy. Allowed values are: `S3Object` and `S3Prefix`.
  s3DataType?: string;

  // The S3 path of model data to deploy.
  s3Uri?: string;
}

export function sagemaker_ModelContainerModelDataSourceS3DataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3DataType",
      "The type of model data to deploy. Allowed values are: `S3Object` and `S3Prefix`.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "The S3 path of model data to deploy.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "compressionType",
      "How the model data is prepared. Allowed values are: `None` and `Gzip`.",
      () => [],
      true,
      true,
    ),
  ];
}
