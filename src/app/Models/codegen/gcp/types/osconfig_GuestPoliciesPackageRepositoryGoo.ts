import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_GuestPoliciesPackageRepositoryGoo {
  // The name of the repository.
  name?: string;

  // The url of the repository.
  url?: string;
}

export function osconfig_GuestPoliciesPackageRepositoryGoo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the repository.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'url',
      'The url of the repository.',
      () => [],
      true,
      false,
    ),
  ];
}
