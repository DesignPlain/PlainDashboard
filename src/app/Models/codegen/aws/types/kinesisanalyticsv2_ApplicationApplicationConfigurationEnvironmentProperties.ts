import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup,
  kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentProperties {
  // Describes the execution property groups.
  propertyGroups?: Array<kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup>;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "propertyGroups",
      "Describes the execution property groups.",
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
