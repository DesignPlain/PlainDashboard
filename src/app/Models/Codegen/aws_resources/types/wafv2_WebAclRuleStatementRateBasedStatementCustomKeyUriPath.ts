import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation";

export interface wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPath {
  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See `text_transformation` above for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation>;
}

export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See `text_transformation` above for details.",
      wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
