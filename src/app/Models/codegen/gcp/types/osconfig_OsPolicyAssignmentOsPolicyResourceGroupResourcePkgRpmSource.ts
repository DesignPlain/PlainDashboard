import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource {
  /*
Defaults to false. When false, files are
subject to validations based on the file type: Remote: A checksum must be
specified. Cloud Storage: An object generation number must be specified.
*/
  allowInsecure?: boolean;

  /*
A Cloud Storage object. Structure is
documented below.
*/
  gcs?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs;

  // A local path within the VM to use.
  localPath?: string;

  /*
A generic remote file. Structure is
documented below.
*/
  remote?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowInsecure",
      "Defaults to false. When false, files are\nsubject to validations based on the file type: Remote: A checksum must be\nspecified. Cloud Storage: An object generation number must be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcs",
      "A Cloud Storage object. Structure is\ndocumented below.",
      () =>
        osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "localPath",
      "A local path within the VM to use.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "remote",
      "A generic remote file. Structure is\ndocumented below.",
      () =>
        osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote_GetTypes(),
      false,
      false,
    ),
  ];
}
