import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface waf_WebAclRuleAction {
  // valid values are: `BLOCK`, `ALLOW`, or `COUNT`
  type?: string;
}

export function waf_WebAclRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'valid values are: `BLOCK`, `ALLOW`, or `COUNT`',
      () => [],
      true,
      false,
    ),
  ];
}
