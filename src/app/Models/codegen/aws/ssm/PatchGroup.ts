import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface PatchGroupArgs {
  // The ID of the patch baseline to register the patch group with.
  baselineId?: string;

  // The name of the patch group that should be registered with the patch baseline.
  patchGroup?: string;
}
export class PatchGroup extends DS_Resource {
  // The name of the patch group that should be registered with the patch baseline.
  public patchGroup?: string;

  // The ID of the patch baseline to register the patch group with.
  public baselineId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'baselineId',
        'The ID of the patch baseline to register the patch group with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'patchGroup',
        'The name of the patch group that should be registered with the patch baseline.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
