import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings,
  sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings_GetTypes,
} from './sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings';

export interface sagemaker_SpaceSpaceSettingsSpaceStorageSettings {
  // A collection of EBS storage settings for a space. See `ebs_storage_settings` Block below.
  ebsStorageSettings?: sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;
}

export function sagemaker_SpaceSpaceSettingsSpaceStorageSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'ebsStorageSettings',
      'A collection of EBS storage settings for a space. See `ebs_storage_settings` Block below.',
      () =>
        sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings_GetTypes(),
      true,
      false,
    ),
  ];
}
