import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface orgpolicy_PolicyDryRunSpecRuleValues {
  // List of values allowed at this resource.
  allowedValues?: Array<string>;

  // List of values denied at this resource.
  deniedValues?: Array<string>;
}

export function orgpolicy_PolicyDryRunSpecRuleValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedValues",
      "List of values allowed at this resource.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "deniedValues",
      "List of values denied at this resource.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
