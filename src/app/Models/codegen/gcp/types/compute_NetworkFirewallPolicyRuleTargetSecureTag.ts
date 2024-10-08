import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_NetworkFirewallPolicyRuleTargetSecureTag {
  // Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+
  name?: string;

  // [Output Only] State of the secure tag, either `EFFECTIVE` or `INEFFECTIVE`. A secure tag is `INEFFECTIVE` when it is deleted or its network is deleted.
  state?: string;
}

export function compute_NetworkFirewallPolicyRuleTargetSecureTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      "Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      '[Output Only] State of the secure tag, either `EFFECTIVE` or `INEFFECTIVE`. A secure tag is `INEFFECTIVE` when it is deleted or its network is deleted.',
      () => [],
      false,
      false,
    ),
  ];
}
