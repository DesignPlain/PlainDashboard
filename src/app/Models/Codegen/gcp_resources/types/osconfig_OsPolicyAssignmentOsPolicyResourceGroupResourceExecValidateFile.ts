import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileRemote,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileRemote_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileRemote";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileGcs,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileGcs_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileGcs";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile {
  /*
A generic remote file. Structure is
documented below.
*/
  remote?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileRemote;

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
  gcs?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileGcs;

  // A local path within the VM to use.
  localPath?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "remote",
      "A generic remote file. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileRemote_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowInsecure",
      "Defaults to false. When false, files are\nsubject to validations based on the file type: Remote: A checksum must be\nspecified. Cloud Storage: An object generation number must be specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcs",
      "A Cloud Storage object. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileGcs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "localPath",
      "A local path within the VM to use.",
      [],
      false,
      false,
    ),
  ];
}
