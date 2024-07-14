import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_ClusterSetting {
  // Name of the setting to manage. Valid values: `containerInsights`.
  name?: string;

  // The value to assign to the setting. Valid values are `enabled` and `disabled`.
  value?: string;
}

export function ecs_ClusterSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the setting to manage. Valid values: `containerInsights`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value to assign to the setting. Valid values are `enabled` and `disabled`.",
      [],
      true,
      false,
    ),
  ];
}
