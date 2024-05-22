import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_ModelPrimaryContainerModelDataSourceS3DataSource,
  sagemaker_ModelPrimaryContainerModelDataSourceS3DataSource_GetTypes,
} from "./sagemaker_ModelPrimaryContainerModelDataSourceS3DataSource";

export interface sagemaker_ModelPrimaryContainerModelDataSource {
  // The S3 location of model data to deploy.
  s3DataSources?: Array<sagemaker_ModelPrimaryContainerModelDataSourceS3DataSource>;
}

export function sagemaker_ModelPrimaryContainerModelDataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "s3DataSources",
      "The S3 location of model data to deploy.",
      sagemaker_ModelPrimaryContainerModelDataSourceS3DataSource_GetTypes(),
      true,
      false,
    ),
  ];
}
