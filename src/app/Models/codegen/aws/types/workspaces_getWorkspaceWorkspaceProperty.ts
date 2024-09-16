import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface workspaces_getWorkspaceWorkspaceProperty {
  // Size of the root volume.
  rootVolumeSizeGib?: number;

  // Running mode. For more information, see [Manage the WorkSpace Running Mode](https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html). Valid values are `AUTO_STOP` and `ALWAYS_ON`.
  runningMode?: string;

  // Time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.
  runningModeAutoStopTimeoutInMinutes?: number;

  // Size of the user storage.
  userVolumeSizeGib?: number;

  // Compute type. For more information, see [Amazon WorkSpaces Bundles](http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles). Valid values are `VALUE`, `STANDARD`, `PERFORMANCE`, `POWER`, `GRAPHICS`, `POWERPRO` and `GRAPHICSPRO`.
  computeTypeName?: string;
}

export function workspaces_getWorkspaceWorkspaceProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'rootVolumeSizeGib',
      'Size of the root volume.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'runningMode',
      'Running mode. For more information, see [Manage the WorkSpace Running Mode](https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html). Valid values are `AUTO_STOP` and `ALWAYS_ON`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'runningModeAutoStopTimeoutInMinutes',
      'Time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'userVolumeSizeGib',
      'Size of the user storage.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'computeTypeName',
      'Compute type. For more information, see [Amazon WorkSpaces Bundles](http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles). Valid values are `VALUE`, `STANDARD`, `PERFORMANCE`, `POWER`, `GRAPHICS`, `POWERPRO` and `GRAPHICSPRO`.',
      () => [],
      true,
      false,
    ),
  ];
}
