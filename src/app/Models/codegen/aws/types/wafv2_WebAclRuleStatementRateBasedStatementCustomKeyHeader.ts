import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation";

export interface wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeader {
  // The name of the header to use.
  name?: string;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See `text_transformation` above for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation>;
}

export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the header to use.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See `text_transformation` above for details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
