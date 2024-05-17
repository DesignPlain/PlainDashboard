import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile {
  // A local path within the VM to use.
  LocalPath?: string;

  /*
A generic remote file. Structure is
documented below.
*/
  Remote?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote;

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
  Gcs?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile_GetTypes(): DynamicUIProps[] {
  return [
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
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote_GetTypes(),
      false,
      false,
    ),
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
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs_GetTypes(),
      false,
      false,
    ),
  ];
}
