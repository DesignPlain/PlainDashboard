import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig {
  // Number of embeddings on each leaf node. The default value is 1000 if not set.
  LeafNodeEmbeddingCount?: number;

  /*
The default percentage of leaf nodes that any query may be searched. Must be in
range 1-100, inclusive. The default value is 10 (means 10%!!(MISSING))(MISSING) if not set.
*/
  LeafNodesToSearchPercent?: number;
}

export function Vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "LeafNodeEmbeddingCount",
      "Number of embeddings on each leaf node. The default value is 1000 if not set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "LeafNodesToSearchPercent",
      "The default percentage of leaf nodes that any query may be searched. Must be in\nrange 1-100, inclusive. The default value is 10 (means 10%!)(MISSING) if not set.",
      [],
      true,
      false,
    ),
  ];
}
