import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository {
  /*
A Yum Repository. Structure is
documented below.
*/
  yum?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum;

  /*
A Zypper Repository. Structure is
documented below.
*/
  zypper?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper;

  /*
An Apt Repository. Structure is
documented below.
*/
  apt?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt;

  /*
A Goo Repository. Structure is
documented below.
*/
  goo?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "apt",
      "An Apt Repository. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "goo",
      "A Goo Repository. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "yum",
      "A Yum Repository. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "zypper",
      "A Zypper Repository. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper_GetTypes(),
      false,
      false,
    ),
  ];
}
