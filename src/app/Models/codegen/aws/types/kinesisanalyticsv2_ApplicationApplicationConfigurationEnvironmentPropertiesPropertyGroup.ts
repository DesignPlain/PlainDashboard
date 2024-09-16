import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup {
  // Application execution property key-value map.
  propertyMap?: Map<string, string>;

  // The key of the application execution property key-value map.
  propertyGroupId?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'propertyMap',
      'Application execution property key-value map.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'propertyGroupId',
      'The key of the application execution property key-value map.',
      () => [],
      true,
      false,
    ),
  ];
}
