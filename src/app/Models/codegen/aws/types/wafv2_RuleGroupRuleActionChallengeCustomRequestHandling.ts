import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader,
  wafv2_RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader_GetTypes,
} from "./wafv2_RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader";

export interface wafv2_RuleGroupRuleActionChallengeCustomRequestHandling {
  // The `insert_header` blocks used to define HTTP headers added to the request. See Custom HTTP Header below for details.
  insertHeaders?: Array<wafv2_RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader>;
}

export function wafv2_RuleGroupRuleActionChallengeCustomRequestHandling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "insertHeaders",
      "The `insert_header` blocks used to define HTTP headers added to the request. See Custom HTTP Header below for details.",
      () =>
        wafv2_RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
