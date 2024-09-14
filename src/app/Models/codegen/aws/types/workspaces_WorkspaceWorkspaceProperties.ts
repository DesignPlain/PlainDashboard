import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface workspaces_WorkspaceWorkspaceProperties {
  // The size of the user storage.
  userVolumeSizeGib?: number;

  // The compute type. For more information, see [Amazon WorkSpaces Bundles](http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles). Valid values are `VALUE`, `STANDARD`, `PERFORMANCE`, `POWER`, `GRAPHICS`, `POWERPRO`, `GRAPHICSPRO`, `GRAPHICS_G4DN`, and `GRAPHICSPRO_G4DN`.
  computeTypeName?: string;

  // The size of the root volume.
  rootVolumeSizeGib?: number;

  // The running mode. For more information, see [Manage the WorkSpace Running Mode](https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html). Valid values are `AUTO_STOP` and `ALWAYS_ON`.
  runningMode?: string;

  // The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.
  runningModeAutoStopTimeoutInMinutes?: number;
}

export function workspaces_WorkspaceWorkspaceProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "userVolumeSizeGib",
      "The size of the user storage.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "computeTypeName",
      "The compute type. For more information, see [Amazon WorkSpaces Bundles](http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles). Valid values are `VALUE`, `STANDARD`, `PERFORMANCE`, `POWER`, `GRAPHICS`, `POWERPRO`, `GRAPHICSPRO`, `GRAPHICS_G4DN`, and `GRAPHICSPRO_G4DN`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rootVolumeSizeGib",
      "The size of the root volume.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "runningMode",
      "The running mode. For more information, see [Manage the WorkSpace Running Mode](https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html). Valid values are `AUTO_STOP` and `ALWAYS_ON`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "runningModeAutoStopTimeoutInMinutes",
      "The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.",
      () => [],
      false,
      false,
    ),
  ];
}
