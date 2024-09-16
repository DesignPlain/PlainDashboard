import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudformation_StackSetInstanceDeploymentTargets {
  // List of accounts to deploy stack set updates.
  accounts?: Array<string>;

  // S3 URL of the file containing the list of accounts.
  accountsUrl?: string;

  // Organization root ID or organizational unit (OU) IDs to which StackSets deploys.
  organizationalUnitIds?: Array<string>;

  // Limit deployment targets to individual accounts or include additional accounts with provided OUs. Valid values: `INTERSECTION`, `DIFFERENCE`, `UNION`, `NONE`.
  accountFilterType?: string;
}

export function cloudformation_StackSetInstanceDeploymentTargets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'organizationalUnitIds',
      'Organization root ID or organizational unit (OU) IDs to which StackSets deploys.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'accountFilterType',
      'Limit deployment targets to individual accounts or include additional accounts with provided OUs. Valid values: `INTERSECTION`, `DIFFERENCE`, `UNION`, `NONE`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'accounts',
      'List of accounts to deploy stack set updates.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'accountsUrl',
      'S3 URL of the file containing the list of accounts.',
      () => [],
      false,
      true,
    ),
  ];
}
