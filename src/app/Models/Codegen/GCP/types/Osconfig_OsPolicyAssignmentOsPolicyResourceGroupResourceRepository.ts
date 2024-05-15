import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository {
  /*
An Apt Repository. Structure is
documented below.
*/
  Apt?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt;

  /*
A Goo Repository. Structure is
documented below.
*/
  Goo?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo;

  /*
A Yum Repository. Structure is
documented below.
*/
  Yum?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum;

  /*
A Zypper Repository. Structure is
documented below.
*/
  Zypper?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Apt",
      "An Apt Repository. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Goo",
      "A Goo Repository. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Yum",
      "A Yum Repository. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Zypper",
      "A Zypper Repository. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper_GetTypes(),
      false,
      false,
    ),
  ];
}
