import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup {
  // The key of the application execution property key-value map.
  propertyGroupId?: string;

  // Application execution property key-value map.
  propertyMap?: Map<string, string>;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "propertyGroupId",
      "The key of the application execution property key-value map.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "propertyMap",
      "Application execution property key-value map.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
