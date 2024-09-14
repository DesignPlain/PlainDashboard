import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DashboardSourceEntitySourceTemplate,
  quicksight_DashboardSourceEntitySourceTemplate_GetTypes,
} from "./quicksight_DashboardSourceEntitySourceTemplate";

export interface quicksight_DashboardSourceEntity {
  // The source template. See source_template.
  sourceTemplate?: quicksight_DashboardSourceEntitySourceTemplate;
}

export function quicksight_DashboardSourceEntity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sourceTemplate",
      "The source template. See source_template.",
      () => quicksight_DashboardSourceEntitySourceTemplate_GetTypes(),
      false,
      false,
    ),
  ];
}
