import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern";

export interface wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody {
  // The patterns to look for in the JSON body. You must specify exactly one setting: either `all` or `included_paths`. See [JsonMatchPattern](https://docs.aws.amazon.com/waf/latest/APIReference/API_JsonMatchPattern.html) for details.
  matchPattern?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern;

  // The parts of the JSON to match against using the `match_pattern`. Valid values are `ALL`, `KEY` and `VALUE`.
  matchScope?: string;

  // What to do if the body is larger than can be inspected. Valid values are `CONTINUE` (default), `MATCH` and `NO_MATCH`.
  oversizeHandling?: string;

  // What to do when JSON parsing fails. Defaults to evaluating up to the first parsing failure. Valid values are `EVALUATE_AS_STRING`, `MATCH` and `NO_MATCH`.
  invalidFallbackBehavior?: string;
}

export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "matchPattern",
      "The patterns to look for in the JSON body. You must specify exactly one setting: either `all` or `included_paths`. See [JsonMatchPattern](https://docs.aws.amazon.com/waf/latest/APIReference/API_JsonMatchPattern.html) for details.",
      wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "matchScope",
      "The parts of the JSON to match against using the `match_pattern`. Valid values are `ALL`, `KEY` and `VALUE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oversizeHandling",
      "What to do if the body is larger than can be inspected. Valid values are `CONTINUE` (default), `MATCH` and `NO_MATCH`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "invalidFallbackBehavior",
      "What to do when JSON parsing fails. Defaults to evaluating up to the first parsing failure. Valid values are `EVALUATE_AS_STRING`, `MATCH` and `NO_MATCH`.",
      [],
      false,
      false,
    ),
  ];
}
