import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation';

export interface wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument {
  // The name of the query argument to use.
  name?: string;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See `text_transformation` above for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation>;
}

export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the query argument to use.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'textTransformations',
      'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See `text_transformation` above for details.',
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
