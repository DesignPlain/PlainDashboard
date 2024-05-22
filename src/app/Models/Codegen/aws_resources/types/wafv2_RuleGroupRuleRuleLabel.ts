import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface wafv2_RuleGroupRuleRuleLabel {
  // The label string.
  name?: string;
}

export function wafv2_RuleGroupRuleRuleLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The label string.",
      [],
      true,
      false,
    ),
  ];
}
