import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_PatchDeploymentPatchConfigWindowsUpdate {
  /*
Only apply updates of these windows update classifications. If empty, all updates are applied.
Each value may be one of: `CRITICAL`, `SECURITY`, `DEFINITION`, `DRIVER`, `FEATURE_PACK`, `SERVICE_PACK`, `TOOL`, `UPDATE_ROLLUP`, `UPDATE`.
*/
  classifications?: Array<string>;

  // List of KBs to exclude from update.
  excludes?: Array<string>;

  /*
An exclusive list of kbs to be updated. These are the only patches that will be updated.
This field must not be used with other patch configurations.
*/
  exclusivePatches?: Array<string>;
}

export function osconfig_PatchDeploymentPatchConfigWindowsUpdate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'classifications',
      'Only apply updates of these windows update classifications. If empty, all updates are applied.\nEach value may be one of: `CRITICAL`, `SECURITY`, `DEFINITION`, `DRIVER`, `FEATURE_PACK`, `SERVICE_PACK`, `TOOL`, `UPDATE_ROLLUP`, `UPDATE`.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'excludes',
      'List of KBs to exclude from update.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'exclusivePatches',
      'An exclusive list of kbs to be updated. These are the only patches that will be updated.\nThis field must not be used with other patch configurations.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
