import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface autoscalingplans_ScalingPlanApplicationSourceTagFilter {
  // Tag key.
  key?: string;

  // Tag values.
  values?: Array<string>;
}

export function autoscalingplans_ScalingPlanApplicationSourceTagFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Tag key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Tag values.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
