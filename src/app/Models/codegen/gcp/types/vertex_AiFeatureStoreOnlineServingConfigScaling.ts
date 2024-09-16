import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiFeatureStoreOnlineServingConfigScaling {
  // The maximum number of nodes to scale up to. Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.
  maxNodeCount?: number;

  // The minimum number of nodes to scale down to. Must be greater than or equal to 1.
  minNodeCount?: number;
}

export function vertex_AiFeatureStoreOnlineServingConfigScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxNodeCount',
      "The maximum number of nodes to scale up to. Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minNodeCount',
      'The minimum number of nodes to scale down to. Must be greater than or equal to 1.',
      () => [],
      true,
      false,
    ),
  ];
}
