import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_getAiIndexIndexStat {
  // The number of vectors in the Index.
  VectorsCount?: string;

  // The number of shards in the Index.
  ShardsCount?: number;
}

export function Vertex_getAiIndexIndexStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "VectorsCount",
      "The number of vectors in the Index.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ShardsCount",
      "The number of shards in the Index.",
      [],
      true,
      false,
    ),
  ];
}
