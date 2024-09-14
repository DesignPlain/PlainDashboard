import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface alb_ListenerRuleConditionQueryString {
  // Query string key pattern to match.
  key?: string;

  // Query string value pattern to match.
  value?: string;
}

export function alb_ListenerRuleConditionQueryString_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Query string key pattern to match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Query string value pattern to match.",
      () => [],
      true,
      false,
    ),
  ];
}
