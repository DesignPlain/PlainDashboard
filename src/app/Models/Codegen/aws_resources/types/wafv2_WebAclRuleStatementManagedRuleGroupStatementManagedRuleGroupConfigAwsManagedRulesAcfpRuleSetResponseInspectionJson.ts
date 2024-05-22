import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionJson {
  // Values in the response header with the specified name that indicate a failed login attempt.
  failureValues?: Array<string>;

  // The identifier for the value to match against in the JSON.
  identifier?: string;

  // Values in the response header with the specified name that indicate a successful login attempt.
  successValues?: Array<string>;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionJson_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "failureValues",
      "Values in the response header with the specified name that indicate a failed login attempt.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identifier",
      "The identifier for the value to match against in the JSON.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "successValues",
      "Values in the response header with the specified name that indicate a successful login attempt.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
