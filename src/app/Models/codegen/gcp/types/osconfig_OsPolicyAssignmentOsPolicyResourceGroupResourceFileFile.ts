import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs_GetTypes,
} from './osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs';
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote_GetTypes,
} from './osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote';

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile {
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
  gcs?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs;

  // A local path within the VM to use.
  localPath?: string;

  /*
A generic remote file. Structure is
documented below.
*/
  remote?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'allowInsecure',
      'Defaults to false. When false, files are\nsubject to validations based on the file type: Remote: A checksum must be\nspecified. Cloud Storage: An object generation number must be specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'gcs',
      'A Cloud Storage object. Structure is\ndocumented below.',
      () =>
        osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'localPath',
      'A local path within the VM to use.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'remote',
      'A generic remote file. Structure is\ndocumented below.',
      () =>
        osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileRemote_GetTypes(),
      false,
      false,
    ),
  ];
}
