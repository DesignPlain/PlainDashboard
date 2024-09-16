import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_ModelContainerModelDataSourceS3DataSource,
  sagemaker_ModelContainerModelDataSourceS3DataSource_GetTypes,
} from './sagemaker_ModelContainerModelDataSourceS3DataSource';

export interface sagemaker_ModelContainerModelDataSource {
  // The S3 location of model data to deploy.
  s3DataSources?: Array<sagemaker_ModelContainerModelDataSourceS3DataSource>;
}

export function sagemaker_ModelContainerModelDataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      's3DataSources',
      'The S3 location of model data to deploy.',
      () => sagemaker_ModelContainerModelDataSourceS3DataSource_GetTypes(),
      true,
      false,
    ),
  ];
}
