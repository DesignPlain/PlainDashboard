import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_RuleGroupRuleActionBlockCustomResponse,
  wafv2_RuleGroupRuleActionBlockCustomResponse_GetTypes,
} from "./wafv2_RuleGroupRuleActionBlockCustomResponse";

export interface wafv2_RuleGroupRuleActionBlock {
  // Defines a custom response for the web request. See Custom Response below for details.
  customResponse?: wafv2_RuleGroupRuleActionBlockCustomResponse;
}

export function wafv2_RuleGroupRuleActionBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customResponse",
      "Defines a custom response for the web request. See Custom Response below for details.",
      wafv2_RuleGroupRuleActionBlockCustomResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
