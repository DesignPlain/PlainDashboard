import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vertex_AiIndexIndexStat {
  /*
(Output)
The number of shards in the Index.
*/
  shardsCount?: number;

  /*
(Output)
The number of vectors in the Index.
*/
  vectorsCount?: string;
}

export function vertex_AiIndexIndexStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vectorsCount",
      "(Output)\nThe number of vectors in the Index.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "shardsCount",
      "(Output)\nThe number of shards in the Index.",
      [],
      false,
      false,
    ),
  ];
}
