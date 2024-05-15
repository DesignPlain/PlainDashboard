import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource {
  /*
File resource Structure is
documented below.
*/
  File?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile;

  /*
The id of the resource with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-63 characters.
-   Must end with a number or a letter.
-   Must be unique within the OS policy.
*/
  Id?: string;

  /*
Package resource Structure is
documented below.
*/
  Pkg?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg;

  /*
Package repository resource Structure is
documented below.
*/
  Repository?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository;

  /*
Exec resource Structure is
documented below.
*/
  Exec?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "File",
      "File resource Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "The id of the resource with the following restrictions:\n\n*   Must contain only lowercase letters, numbers, and hyphens.\n*   Must start with a letter.\n*   Must be between 1-63 characters.\n*   Must end with a number or a letter.\n*   Must be unique within the OS policy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Pkg",
      "Package resource Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Repository",
      "Package repository resource Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Exec",
      "Exec resource Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec_GetTypes(),
      false,
      false,
    ),
  ];
}
