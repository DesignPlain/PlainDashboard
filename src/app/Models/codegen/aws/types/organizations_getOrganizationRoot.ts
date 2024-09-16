import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  organizations_getOrganizationRootPolicyType,
  organizations_getOrganizationRootPolicyType_GetTypes,
} from './organizations_getOrganizationRootPolicyType';

export interface organizations_getOrganizationRoot {
  // ARN of the root
  arn?: string;

  // Identifier of the root
  id?: string;

  // The name of the policy type
  name?: string;

  // List of policy types enabled for this root. All elements have these attributes:
  policyTypes?: Array<organizations_getOrganizationRootPolicyType>;
}

export function organizations_getOrganizationRoot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'ARN of the root',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'Identifier of the root',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the policy type',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'policyTypes',
      'List of policy types enabled for this root. All elements have these attributes:',
      () => organizations_getOrganizationRootPolicyType_GetTypes(),
      true,
      false,
    ),
  ];
}
