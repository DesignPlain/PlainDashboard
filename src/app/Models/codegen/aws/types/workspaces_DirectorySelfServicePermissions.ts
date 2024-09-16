import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface workspaces_DirectorySelfServicePermissions {
  // Whether WorkSpaces directory users can change the compute type (bundle) for their workspace. Default `false`.
  changeComputeType?: boolean;

  // Whether WorkSpaces directory users can increase the volume size of the drives on their workspace. Default `false`.
  increaseVolumeSize?: boolean;

  // Whether WorkSpaces directory users can rebuild the operating system of a workspace to its original state. Default `false`.
  rebuildWorkspace?: boolean;

  // Whether WorkSpaces directory users can restart their workspace. Default `true`.
  restartWorkspace?: boolean;

  // Whether WorkSpaces directory users can switch the running mode of their workspace. Default `false`.
  switchRunningMode?: boolean;
}

export function workspaces_DirectorySelfServicePermissions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'switchRunningMode',
      'Whether WorkSpaces directory users can switch the running mode of their workspace. Default `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'changeComputeType',
      'Whether WorkSpaces directory users can change the compute type (bundle) for their workspace. Default `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'increaseVolumeSize',
      'Whether WorkSpaces directory users can increase the volume size of the drives on their workspace. Default `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'rebuildWorkspace',
      'Whether WorkSpaces directory users can rebuild the operating system of a workspace to its original state. Default `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'restartWorkspace',
      'Whether WorkSpaces directory users can restart their workspace. Default `true`.',
      () => [],
      false,
      false,
    ),
  ];
}
