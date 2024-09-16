import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vertex_AiFeatureStoreOnlineServingConfigScaling,
  vertex_AiFeatureStoreOnlineServingConfigScaling_GetTypes,
} from './vertex_AiFeatureStoreOnlineServingConfigScaling';

export interface vertex_AiFeatureStoreOnlineServingConfig {
  /*
Online serving scaling configuration. Only one of fixedNodeCount and scaling can be set. Setting one will reset the other.
Structure is documented below.
*/
  scaling?: vertex_AiFeatureStoreOnlineServingConfigScaling;

  // The number of nodes for each cluster. The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.
  fixedNodeCount?: number;
}

export function vertex_AiFeatureStoreOnlineServingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'scaling',
      'Online serving scaling configuration. Only one of fixedNodeCount and scaling can be set. Setting one will reset the other.\nStructure is documented below.',
      () => vertex_AiFeatureStoreOnlineServingConfigScaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'fixedNodeCount',
      'The number of nodes for each cluster. The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.',
      () => [],
      false,
      false,
    ),
  ];
}
