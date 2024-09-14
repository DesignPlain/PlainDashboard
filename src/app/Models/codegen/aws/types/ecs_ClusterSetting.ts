import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecs_ClusterSetting {
  // Name of the setting to manage. Valid values: `containerInsights`.
  name?: string;

  // Value to assign to the setting. Valid values: `enabled`, `disabled`.
  value?: string;
}

export function ecs_ClusterSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the setting to manage. Valid values: `containerInsights`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value to assign to the setting. Valid values: `enabled`, `disabled`.",
      () => [],
      true,
      false,
    ),
  ];
}
