import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface folder_getOrganizationPolicyListPolicyDeny {
  // The policy allows or denies all values.
  all?: boolean;

  // The policy can define specific values that are allowed or denied.
  values?: Array<string>;
}

export function folder_getOrganizationPolicyListPolicyDeny_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'all',
      'The policy allows or denies all values.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'The policy can define specific values that are allowed or denied.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
