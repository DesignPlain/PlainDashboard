import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig {
  /*
The default percentage of leaf nodes that any query may be searched. Must be in
range 1-100, inclusive. The default value is 10 (means 10%!!(MISSING))(MISSING) if not set.
*/
  leafNodesToSearchPercent?: number;

  // Number of embeddings on each leaf node. The default value is 1000 if not set.
  leafNodeEmbeddingCount?: number;
}

export function vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'leafNodesToSearchPercent',
      'The default percentage of leaf nodes that any query may be searched. Must be in\nrange 1-100, inclusive. The default value is 10 (means 10%!)(MISSING) if not set.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'leafNodeEmbeddingCount',
      'Number of embeddings on each leaf node. The default value is 1000 if not set.',
      () => [],
      false,
      false,
    ),
  ];
}
