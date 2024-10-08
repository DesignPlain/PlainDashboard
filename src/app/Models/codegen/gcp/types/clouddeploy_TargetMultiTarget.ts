import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface clouddeploy_TargetMultiTarget {
  // Required. The target_ids of this multiTarget.
  targetIds?: Array<string>;
}

export function clouddeploy_TargetMultiTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'targetIds',
      'Required. The target_ids of this multiTarget.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
