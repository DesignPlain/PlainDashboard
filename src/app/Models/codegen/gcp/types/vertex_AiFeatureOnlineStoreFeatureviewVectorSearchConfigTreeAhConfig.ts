import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig {
  // Number of embeddings on each leaf node. The default value is 1000 if not set.
  leafNodeEmbeddingCount?: string;
}

export function vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'leafNodeEmbeddingCount',
      'Number of embeddings on each leaf node. The default value is 1000 if not set.',
      () => [],
      false,
      false,
    ),
  ];
}
