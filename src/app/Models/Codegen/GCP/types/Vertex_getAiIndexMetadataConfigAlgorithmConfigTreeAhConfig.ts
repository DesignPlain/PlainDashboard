import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig {
  // Number of embeddings on each leaf node. The default value is 1000 if not set.
  leafNodeEmbeddingCount?: number;

  /*
The default percentage of leaf nodes that any query may be searched. Must be in
range 1-100, inclusive. The default value is 10 (means 10%!!(MISSING))(MISSING) if not set.
*/
  leafNodesToSearchPercent?: number;
}

export function vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "leafNodeEmbeddingCount",
      "Number of embeddings on each leaf node. The default value is 1000 if not set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "leafNodesToSearchPercent",
      "The default percentage of leaf nodes that any query may be searched. Must be in\nrange 1-100, inclusive. The default value is 10 (means 10%!)(MISSING) if not set.",
      [],
      true,
      false,
    ),
  ];
}
