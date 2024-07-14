import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatement,
  wafv2_WebAclRuleStatement_GetTypes,
} from "./wafv2_WebAclRuleStatement";

export interface wafv2_WebAclRuleStatementAndStatement {
  // The statements to combine.
  statements?: Array<wafv2_WebAclRuleStatement>;
}

export function wafv2_WebAclRuleStatementAndStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "statements",
      "The statements to combine.",
      wafv2_WebAclRuleStatement_GetTypes(),
      true,
      false,
    ),
  ];
}
