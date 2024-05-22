import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface xray_GroupInsightsConfiguration {
  // Specifies whether insights are enabled.
  insightsEnabled?: boolean;

  // Specifies whether insight notifications are enabled.
  notificationsEnabled?: boolean;
}

export function xray_GroupInsightsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "insightsEnabled",
      "Specifies whether insights are enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "notificationsEnabled",
      "Specifies whether insight notifications are enabled.",
      [],
      false,
      false,
    ),
  ];
}
