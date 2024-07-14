import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader,
  wafv2_RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader_GetTypes,
} from "./wafv2_RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader";

export interface wafv2_RuleGroupRuleActionAllowCustomRequestHandling {
  // The `insert_header` blocks used to define HTTP headers added to the request. See Custom HTTP Header below for details.
  insertHeaders?: Array<wafv2_RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader>;
}

export function wafv2_RuleGroupRuleActionAllowCustomRequestHandling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "insertHeaders",
      "The `insert_header` blocks used to define HTTP headers added to the request. See Custom HTTP Header below for details.",
      wafv2_RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
