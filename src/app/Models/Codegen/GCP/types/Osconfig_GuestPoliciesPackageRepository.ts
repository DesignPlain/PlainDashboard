import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_GuestPoliciesPackageRepositoryApt,
  Osconfig_GuestPoliciesPackageRepositoryApt_GetTypes,
} from "./Osconfig_GuestPoliciesPackageRepositoryApt";
import {
  Osconfig_GuestPoliciesPackageRepositoryGoo,
  Osconfig_GuestPoliciesPackageRepositoryGoo_GetTypes,
} from "./Osconfig_GuestPoliciesPackageRepositoryGoo";
import {
  Osconfig_GuestPoliciesPackageRepositoryYum,
  Osconfig_GuestPoliciesPackageRepositoryYum_GetTypes,
} from "./Osconfig_GuestPoliciesPackageRepositoryYum";
import {
  Osconfig_GuestPoliciesPackageRepositoryZypper,
  Osconfig_GuestPoliciesPackageRepositoryZypper_GetTypes,
} from "./Osconfig_GuestPoliciesPackageRepositoryZypper";

export interface Osconfig_GuestPoliciesPackageRepository {
  /*
An Apt Repository.
Structure is documented below.
*/
  Apt?: Osconfig_GuestPoliciesPackageRepositoryApt;

  /*
A Goo Repository.
Structure is documented below.
*/
  Goo?: Osconfig_GuestPoliciesPackageRepositoryGoo;

  /*
A Yum Repository.
Structure is documented below.
*/
  Yum?: Osconfig_GuestPoliciesPackageRepositoryYum;

  /*
A Zypper Repository.
Structure is documented below.
*/
  Zypper?: Osconfig_GuestPoliciesPackageRepositoryZypper;
}

export function Osconfig_GuestPoliciesPackageRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Apt",
      "An Apt Repository.\nStructure is documented below.",
      Osconfig_GuestPoliciesPackageRepositoryApt_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Goo",
      "A Goo Repository.\nStructure is documented below.",
      Osconfig_GuestPoliciesPackageRepositoryGoo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Yum",
      "A Yum Repository.\nStructure is documented below.",
      Osconfig_GuestPoliciesPackageRepositoryYum_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Zypper",
      "A Zypper Repository.\nStructure is documented below.",
      Osconfig_GuestPoliciesPackageRepositoryZypper_GetTypes(),
      false,
      false,
    ),
  ];
}
