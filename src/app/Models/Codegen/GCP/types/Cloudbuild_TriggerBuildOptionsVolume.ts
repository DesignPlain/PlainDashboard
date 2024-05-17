import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_TriggerBuildOptionsVolume {
  /*
Name of the volume to mount.
Volume names must be unique per build step and must be valid names for Docker volumes.
Each named volume must be used by at least two build steps.
*/
  Name?: string;

  /*
Path at which to mount the volume.
Paths must be absolute and cannot conflict with other volume paths on the same
build step or with certain reserved volume paths.
*/
  Path?: string;
}

export function Cloudbuild_TriggerBuildOptionsVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the volume to mount.\nVolume names must be unique per build step and must be valid names for Docker volumes.\nEach named volume must be used by at least two build steps.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path at which to mount the volume.\nPaths must be absolute and cannot conflict with other volume paths on the same\nbuild step or with certain reserved volume paths.",
      [],
      false,
      false,
    ),
  ];
}
