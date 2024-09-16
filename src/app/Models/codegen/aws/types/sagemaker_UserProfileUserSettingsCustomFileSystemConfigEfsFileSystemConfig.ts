import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig {
  // The ID of your Amazon EFS file system.
  fileSystemId?: string;

  // The path to the file system directory that is accessible in Amazon SageMaker Studio. Permitted users can access only this directory and below.
  fileSystemPath?: string;
}

export function sagemaker_UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'fileSystemId',
      'The ID of your Amazon EFS file system.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileSystemPath',
      'The path to the file system directory that is accessible in Amazon SageMaker Studio. Permitted users can access only this directory and below.',
      () => [],
      false,
      false,
    ),
  ];
}
