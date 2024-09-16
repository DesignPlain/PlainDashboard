import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  osconfig_GuestPoliciesPackageRepositoryApt,
  osconfig_GuestPoliciesPackageRepositoryApt_GetTypes,
} from './osconfig_GuestPoliciesPackageRepositoryApt';
import {
  osconfig_GuestPoliciesPackageRepositoryGoo,
  osconfig_GuestPoliciesPackageRepositoryGoo_GetTypes,
} from './osconfig_GuestPoliciesPackageRepositoryGoo';
import {
  osconfig_GuestPoliciesPackageRepositoryYum,
  osconfig_GuestPoliciesPackageRepositoryYum_GetTypes,
} from './osconfig_GuestPoliciesPackageRepositoryYum';
import {
  osconfig_GuestPoliciesPackageRepositoryZypper,
  osconfig_GuestPoliciesPackageRepositoryZypper_GetTypes,
} from './osconfig_GuestPoliciesPackageRepositoryZypper';

export interface osconfig_GuestPoliciesPackageRepository {
  /*
A Goo Repository.
Structure is documented below.
*/
  goo?: osconfig_GuestPoliciesPackageRepositoryGoo;

  /*
A Yum Repository.
Structure is documented below.
*/
  yum?: osconfig_GuestPoliciesPackageRepositoryYum;

  /*
A Zypper Repository.
Structure is documented below.
*/
  zypper?: osconfig_GuestPoliciesPackageRepositoryZypper;

  /*
An Apt Repository.
Structure is documented below.
*/
  apt?: osconfig_GuestPoliciesPackageRepositoryApt;
}

export function osconfig_GuestPoliciesPackageRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'goo',
      'A Goo Repository.\nStructure is documented below.',
      () => osconfig_GuestPoliciesPackageRepositoryGoo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'yum',
      'A Yum Repository.\nStructure is documented below.',
      () => osconfig_GuestPoliciesPackageRepositoryYum_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'zypper',
      'A Zypper Repository.\nStructure is documented below.',
      () => osconfig_GuestPoliciesPackageRepositoryZypper_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'apt',
      'An Apt Repository.\nStructure is documented below.',
      () => osconfig_GuestPoliciesPackageRepositoryApt_GetTypes(),
      false,
      false,
    ),
  ];
}
