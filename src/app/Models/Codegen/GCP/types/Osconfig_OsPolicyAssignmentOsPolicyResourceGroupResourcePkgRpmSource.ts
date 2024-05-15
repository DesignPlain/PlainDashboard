import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource {
  /*
Defaults to false. When false, files are
subject to validations based on the file type: Remote: A checksum must be
specified. Cloud Storage: An object generation number must be specified.
*/
  AllowInsecure?: boolean;

  /*
A Cloud Storage object. Structure is
documented below.
*/
  Gcs?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs;

  // A local path within the VM to use.
  LocalPath?: string;

  /*
A generic remote file. Structure is
documented below.
*/
  Remote?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowInsecure",
      "Defaults to false. When false, files are\nsubject to validations based on the file type: Remote: A checksum must be\nspecified. Cloud Storage: An object generation number must be specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Gcs",
      "A Cloud Storage object. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LocalPath",
      "A local path within the VM to use.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Remote",
      "A generic remote file. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote_GetTypes(),
      false,
      false,
    ),
  ];
}
