import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_AwsNodePoolUpdateSettingsSurgeSettings,
  container_AwsNodePoolUpdateSettingsSurgeSettings_GetTypes,
} from './container_AwsNodePoolUpdateSettingsSurgeSettings';

export interface container_AwsNodePoolUpdateSettings {
  // Optional. Settings for surge update.
  surgeSettings?: container_AwsNodePoolUpdateSettingsSurgeSettings;
}

export function container_AwsNodePoolUpdateSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'surgeSettings',
      'Optional. Settings for surge update.',
      () => container_AwsNodePoolUpdateSettingsSurgeSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
