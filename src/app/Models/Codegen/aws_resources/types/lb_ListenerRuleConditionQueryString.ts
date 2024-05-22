import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lb_ListenerRuleConditionQueryString {
  // Query string key pattern to match.
  key?: string;

  // Query string value pattern to match.
  value?: string;
}

export function lb_ListenerRuleConditionQueryString_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Query string key pattern to match.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Query string value pattern to match.",
      [],
      true,
      false,
    ),
  ];
}
