import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  projects_getOrganizationPolicyListPolicyDeny,
  projects_getOrganizationPolicyListPolicyDeny_GetTypes,
} from './projects_getOrganizationPolicyListPolicyDeny';
import {
  projects_getOrganizationPolicyListPolicyAllow,
  projects_getOrganizationPolicyListPolicyAllow_GetTypes,
} from './projects_getOrganizationPolicyListPolicyAllow';

export interface projects_getOrganizationPolicyListPolicy {
  // One or the other must be set.
  allows?: Array<projects_getOrganizationPolicyListPolicyAllow>;

  // One or the other must be set.
  denies?: Array<projects_getOrganizationPolicyListPolicyDeny>;

  // If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  inheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  suggestedValue?: string;
}

export function projects_getOrganizationPolicyListPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'allows',
      'One or the other must be set.',
      () => projects_getOrganizationPolicyListPolicyAllow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'denies',
      'One or the other must be set.',
      () => projects_getOrganizationPolicyListPolicyDeny_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'inheritFromParent',
      'If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'suggestedValue',
      'The Google Cloud Console will try to default to a configuration that matches the value specified in this field.',
      () => [],
      true,
      false,
    ),
  ];
}
