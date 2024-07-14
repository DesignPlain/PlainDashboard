import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll";

export interface wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll;

  //
  excludedCookies?: Array<string>;

  //
  includedCookies?: Array<string>;
}

export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedCookies",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedCookies",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
