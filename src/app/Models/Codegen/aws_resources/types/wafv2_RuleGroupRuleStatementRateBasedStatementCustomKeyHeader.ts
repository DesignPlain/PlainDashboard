import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation";

export interface wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeader {
  // A friendly name of the rule group.
  name?: string;

  /*
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
At least one required.
See Text Transformation below for details.
*/
  textTransformations?: Array<wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "A friendly name of the rule group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.\nAt least one required.\nSee Text Transformation below for details.",
      wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
