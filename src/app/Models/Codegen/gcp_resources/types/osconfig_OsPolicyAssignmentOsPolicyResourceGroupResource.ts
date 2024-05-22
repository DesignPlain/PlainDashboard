import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource {
  /*
Exec resource Structure is
documented below.
*/
  exec?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec;

  /*
File resource Structure is
documented below.
*/
  file?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile;

  /*
The id of the resource with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-63 characters.
-   Must end with a number or a letter.
-   Must be unique within the OS policy.
*/
  id?: string;

  /*
Package resource Structure is
documented below.
*/
  pkg?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg;

  /*
Package repository resource Structure is
documented below.
*/
  repository?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The id of the resource with the following restrictions:\n\n*   Must contain only lowercase letters, numbers, and hyphens.\n*   Must start with a letter.\n*   Must be between 1-63 characters.\n*   Must end with a number or a letter.\n*   Must be unique within the OS policy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pkg",
      "Package resource Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "repository",
      "Package repository resource Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepository_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "exec",
      "Exec resource Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "file",
      "File resource Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFile_GetTypes(),
      false,
      false,
    ),
  ];
}
