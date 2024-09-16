import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiIndexIndexStat {
  /*
(Output)
The number of vectors in the Index.
*/
  vectorsCount?: string;

  /*
(Output)
The number of shards in the Index.
*/
  shardsCount?: number;
}

export function vertex_AiIndexIndexStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'vectorsCount',
      '(Output)\nThe number of vectors in the Index.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'shardsCount',
      '(Output)\nThe number of shards in the Index.',
      () => [],
      false,
      false,
    ),
  ];
}
