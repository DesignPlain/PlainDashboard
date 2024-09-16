import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionJson {
  // The identifier for the value to match against in the JSON.
  identifier?: string;

  // Values in the response header with the specified name that indicate a successful login attempt.
  successValues?: Array<string>;

  // Values in the response header with the specified name that indicate a failed login attempt.
  failureValues?: Array<string>;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionJson_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'identifier',
      'The identifier for the value to match against in the JSON.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'successValues',
      'Values in the response header with the specified name that indicate a successful login attempt.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'failureValues',
      'Values in the response header with the specified name that indicate a failed login attempt.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
