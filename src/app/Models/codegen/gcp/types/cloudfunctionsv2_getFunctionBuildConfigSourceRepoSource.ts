import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource {
  // Regex matching branches to build.
  branchName?: string;

  // Regex matching tags to build.
  commitSha?: string;

  // Directory, relative to the source root, in which to run the build.
  dir?: string;

  /*
Only trigger a build if the revision regex does
NOT match the revision regex.
*/
  invertRegex?: boolean;

  /*
ID of the project that owns the Cloud Source Repository. If omitted, the
project ID requesting the build is assumed.
*/
  projectId?: string;

  // Name of the Cloud Source Repository.
  repoName?: string;

  // Regex matching tags to build.
  tagName?: string;
}

export function cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'branchName',
      'Regex matching branches to build.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'commitSha',
      'Regex matching tags to build.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dir',
      'Directory, relative to the source root, in which to run the build.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'invertRegex',
      'Only trigger a build if the revision regex does\nNOT match the revision regex.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'projectId',
      'ID of the project that owns the Cloud Source Repository. If omitted, the\nproject ID requesting the build is assumed.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'repoName',
      'Name of the Cloud Source Repository.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tagName',
      'Regex matching tags to build.',
      () => [],
      true,
      false,
    ),
  ];
}
