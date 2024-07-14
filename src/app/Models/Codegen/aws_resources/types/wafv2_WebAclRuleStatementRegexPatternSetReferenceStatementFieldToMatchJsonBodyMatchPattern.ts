import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll";

export interface wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll;

  //
  includedPaths?: Array<string>;
}

export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedPaths",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
