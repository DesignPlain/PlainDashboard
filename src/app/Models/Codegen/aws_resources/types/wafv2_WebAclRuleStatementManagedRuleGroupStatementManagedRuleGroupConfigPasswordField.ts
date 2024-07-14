import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField {
  // The name of the password field.
  identifier?: string;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "identifier",
      "The name of the password field.",
      [],
      true,
      false,
    ),
  ];
}
