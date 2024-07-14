import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll;

  // An array of strings that will be used for inspecting headers that do not have a key that matches one of the provided values.
  excludedHeaders?: Array<string>;

  // An array of strings that will be used for inspecting headers that have a key that matches one of the provided values.
  includedHeaders?: Array<string>;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedHeaders",
      "An array of strings that will be used for inspecting headers that do not have a key that matches one of the provided values.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedHeaders",
      "An array of strings that will be used for inspecting headers that have a key that matches one of the provided values.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
