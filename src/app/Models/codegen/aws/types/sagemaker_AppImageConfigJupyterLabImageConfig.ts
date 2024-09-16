import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_AppImageConfigJupyterLabImageConfigFileSystemConfig,
  sagemaker_AppImageConfigJupyterLabImageConfigFileSystemConfig_GetTypes,
} from './sagemaker_AppImageConfigJupyterLabImageConfigFileSystemConfig';
import {
  sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig,
  sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig_GetTypes,
} from './sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig';

export interface sagemaker_AppImageConfigJupyterLabImageConfig {
  // The URL where the Git repository is located. See File System Config details below.
  fileSystemConfig?: sagemaker_AppImageConfigJupyterLabImageConfigFileSystemConfig;

  // The configuration used to run the application image container. See Container Config details below.
  containerConfig?: sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig;
}

export function sagemaker_AppImageConfigJupyterLabImageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'fileSystemConfig',
      'The URL where the Git repository is located. See File System Config details below.',
      () =>
        sagemaker_AppImageConfigJupyterLabImageConfigFileSystemConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'containerConfig',
      'The configuration used to run the application image container. See Container Config details below.',
      () =>
        sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
