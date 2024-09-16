import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_UserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings,
  sagemaker_UserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings_GetTypes,
} from './sagemaker_UserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings';

export interface sagemaker_UserProfileUserSettingsSpaceStorageSettings {
  // The default EBS storage settings for a private space. See Default EBS Storage Settings below.
  defaultEbsStorageSettings?: sagemaker_UserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function sagemaker_UserProfileUserSettingsSpaceStorageSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'defaultEbsStorageSettings',
      'The default EBS storage settings for a private space. See Default EBS Storage Settings below.',
      () =>
        sagemaker_UserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
