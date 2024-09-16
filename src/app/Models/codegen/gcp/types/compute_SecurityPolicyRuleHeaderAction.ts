import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd,
  compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd_GetTypes,
} from './compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd';

export interface compute_SecurityPolicyRuleHeaderAction {
  // The list of request headers to add or overwrite if they're already present. Structure is documented below.
  requestHeadersToAdds?: Array<compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd>;
}

export function compute_SecurityPolicyRuleHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'requestHeadersToAdds',
      "The list of request headers to add or overwrite if they're already present. Structure is documented below.",
      () =>
        compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd_GetTypes(),
      true,
      false,
    ),
  ];
}
