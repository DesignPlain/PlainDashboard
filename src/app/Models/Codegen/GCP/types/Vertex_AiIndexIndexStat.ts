import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_AiIndexIndexStat {
  /*
(Output)
The number of shards in the Index.
*/
  ShardsCount?: number;

  /*
(Output)
The number of vectors in the Index.
*/
  VectorsCount?: string;
}

export function Vertex_AiIndexIndexStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ShardsCount",
      "(Output)\nThe number of shards in the Index.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VectorsCount",
      "(Output)\nThe number of vectors in the Index.",
      [],
      false,
      false,
    ),
  ];
}
