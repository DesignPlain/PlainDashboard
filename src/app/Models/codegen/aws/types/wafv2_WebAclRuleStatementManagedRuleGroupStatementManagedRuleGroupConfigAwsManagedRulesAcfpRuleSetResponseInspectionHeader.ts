import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionHeader {
  // Values in the response header with the specified name that indicate a successful login attempt.
  successValues?: Array<string>;

  // Values in the response header with the specified name that indicate a failed login attempt.
  failureValues?: Array<string>;

  // The name of the header to use.
  name?: string;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionHeader_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the header to use.',
      () => [],
      true,
      false,
    ),
  ];
}
