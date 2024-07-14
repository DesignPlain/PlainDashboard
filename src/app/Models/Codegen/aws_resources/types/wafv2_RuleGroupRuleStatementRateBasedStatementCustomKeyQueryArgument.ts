import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation";

export interface wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument {
  // A friendly name of the rule group.
  name?: string;

  /*
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
At least one required.
See Text Transformation below for details.
*/
  textTransformations?: Array<wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument_GetTypes(): DynamicUIProps[] {
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
      wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
