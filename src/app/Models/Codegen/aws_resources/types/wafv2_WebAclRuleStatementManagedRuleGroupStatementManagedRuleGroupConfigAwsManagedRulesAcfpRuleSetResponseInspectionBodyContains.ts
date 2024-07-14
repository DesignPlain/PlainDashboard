import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains {
  // Strings in the body of the response that indicate a successful login attempt.
  successStrings?: Array<string>;

  // Strings in the body of the response that indicate a failed login attempt.
  failureStrings?: Array<string>;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "successStrings",
      "Strings in the body of the response that indicate a successful login attempt.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "failureStrings",
      "Strings in the body of the response that indicate a failed login attempt.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
