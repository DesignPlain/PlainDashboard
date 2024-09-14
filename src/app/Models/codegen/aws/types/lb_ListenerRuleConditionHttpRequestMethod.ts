import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lb_ListenerRuleConditionHttpRequestMethod {
  //
  values?: Array<string>;
}

export function lb_ListenerRuleConditionHttpRequestMethod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
