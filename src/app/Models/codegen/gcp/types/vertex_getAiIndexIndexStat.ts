import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_getAiIndexIndexStat {
  // The number of shards in the Index.
  shardsCount?: number;

  // The number of vectors in the Index.
  vectorsCount?: string;
}

export function vertex_getAiIndexIndexStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'shardsCount',
      'The number of shards in the Index.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vectorsCount',
      'The number of vectors in the Index.',
      () => [],
      true,
      false,
    ),
  ];
}
