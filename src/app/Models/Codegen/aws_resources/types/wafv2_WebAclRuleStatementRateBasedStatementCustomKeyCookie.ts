import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookieTextTransformation,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookieTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookieTextTransformation";

export interface wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookie {
  // The name of the cookie to use.
  name?: string;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See `text_transformation` above for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookieTextTransformation>;
}

export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookie_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the cookie to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See `text_transformation` above for details.",
      wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookieTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
