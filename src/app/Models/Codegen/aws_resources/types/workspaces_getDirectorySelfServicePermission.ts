import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workspaces_getDirectorySelfServicePermission {
  // Whether WorkSpaces directory users can rebuild the operating system of a workspace to its original state.
  rebuildWorkspace?: boolean;

  // Whether WorkSpaces directory users can restart their workspace.
  restartWorkspace?: boolean;

  // Whether WorkSpaces directory users can switch the running mode of their workspace.
  switchRunningMode?: boolean;

  // Whether WorkSpaces directory users can change the compute type (bundle) for their workspace.
  changeComputeType?: boolean;

  // Whether WorkSpaces directory users can increase the volume size of the drives on their workspace.
  increaseVolumeSize?: boolean;
}

export function workspaces_getDirectorySelfServicePermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "rebuildWorkspace",
      "Whether WorkSpaces directory users can rebuild the operating system of a workspace to its original state.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "restartWorkspace",
      "Whether WorkSpaces directory users can restart their workspace.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "switchRunningMode",
      "Whether WorkSpaces directory users can switch the running mode of their workspace.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "changeComputeType",
      "Whether WorkSpaces directory users can change the compute type (bundle) for their workspace.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "increaseVolumeSize",
      "Whether WorkSpaces directory users can increase the volume size of the drives on their workspace.",
      [],
      true,
      false,
    ),
  ];
}
