import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig {
  // Number of embeddings on each leaf node. The default value is 1000 if not set.
  LeafNodeEmbeddingCount?: string;
}

export function Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LeafNodeEmbeddingCount",
      "Number of embeddings on each leaf node. The default value is 1000 if not set.",
      [],
      false,
      false,
    ),
  ];
}
