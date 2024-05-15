import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_PatchDeploymentPatchConfigWindowsUpdate {
  /*
An exclusive list of kbs to be updated. These are the only patches that will be updated.
This field must not be used with other patch configurations.
*/
  ExclusivePatches?: Array<string>;

  /*
Only apply updates of these windows update classifications. If empty, all updates are applied.
Each value may be one of: `CRITICAL`, `SECURITY`, `DEFINITION`, `DRIVER`, `FEATURE_PACK`, `SERVICE_PACK`, `TOOL`, `UPDATE_ROLLUP`, `UPDATE`.
*/
  Classifications?: Array<string>;

  // List of KBs to exclude from update.
  Excludes?: Array<string>;
}

export function Osconfig_PatchDeploymentPatchConfigWindowsUpdate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ExclusivePatches",
      "An exclusive list of kbs to be updated. These are the only patches that will be updated.\nThis field must not be used with other patch configurations.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Classifications",
      "Only apply updates of these windows update classifications. If empty, all updates are applied.\nEach value may be one of: `CRITICAL`, `SECURITY`, `DEFINITION`, `DRIVER`, `FEATURE_PACK`, `SERVICE_PACK`, `TOOL`, `UPDATE_ROLLUP`, `UPDATE`.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Excludes",
      "List of KBs to exclude from update.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
