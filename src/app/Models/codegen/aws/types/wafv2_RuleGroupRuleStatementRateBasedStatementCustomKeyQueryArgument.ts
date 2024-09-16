import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation';

export interface wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument {
  // A friendly name of the rule group.
  name?: string;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See Text Transformation above for details.
  textTransformations?: Array<wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'A friendly name of the rule group.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'textTransformations',
      'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See Text Transformation above for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
