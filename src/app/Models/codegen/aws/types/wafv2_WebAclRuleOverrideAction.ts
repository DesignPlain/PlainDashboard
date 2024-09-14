import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleOverrideActionCount,
  wafv2_WebAclRuleOverrideActionCount_GetTypes,
} from "./wafv2_WebAclRuleOverrideActionCount";
import {
  wafv2_WebAclRuleOverrideActionNone,
  wafv2_WebAclRuleOverrideActionNone_GetTypes,
} from "./wafv2_WebAclRuleOverrideActionNone";

export interface wafv2_WebAclRuleOverrideAction {
  // Override the rule action setting to count (i.e., only count matches). Configured as an empty block `{}`.
  count?: wafv2_WebAclRuleOverrideActionCount;

  // Don't override the rule action setting. Configured as an empty block `{}`.
  none?: wafv2_WebAclRuleOverrideActionNone;
}

export function wafv2_WebAclRuleOverrideAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "count",
      "Override the rule action setting to count (i.e., only count matches). Configured as an empty block `{}`.",
      () => wafv2_WebAclRuleOverrideActionCount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "none",
      "Don't override the rule action setting. Configured as an empty block `{}`.",
      () => wafv2_WebAclRuleOverrideActionNone_GetTypes(),
      false,
      false,
    ),
  ];
}
