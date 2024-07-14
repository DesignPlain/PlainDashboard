import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandling {
  // The `insert_header` blocks used to define HTTP headers added to the request. See `insert_header` below for details.
  insertHeaders?: Array<wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader>;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "insertHeaders",
      "The `insert_header` blocks used to define HTTP headers added to the request. See `insert_header` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
