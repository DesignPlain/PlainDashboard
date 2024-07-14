import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll";

export interface wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll;

  //
  excludedCookies?: Array<string>;

  //
  includedCookies?: Array<string>;
}

export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll_GetTypes(),
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
