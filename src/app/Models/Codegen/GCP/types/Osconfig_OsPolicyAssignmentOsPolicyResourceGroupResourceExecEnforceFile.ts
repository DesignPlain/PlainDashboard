import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFile {
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
  Gcs?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs;

  // A local path within the VM to use.
  LocalPath?: string;

  /*
A generic remote file. Structure is
documented below.
*/
  Remote?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFile_GetTypes(): DynamicUIProps[] {
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
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs_GetTypes(),
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
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote_GetTypes(),
      false,
      false,
    ),
  ];
}
