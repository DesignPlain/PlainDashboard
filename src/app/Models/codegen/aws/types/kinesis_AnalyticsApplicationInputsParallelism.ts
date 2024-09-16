import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_AnalyticsApplicationInputsParallelism {
  // The Count of streams.
  count?: number;
}

export function kinesis_AnalyticsApplicationInputsParallelism_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'count',
      'The Count of streams.',
      () => [],
      false,
      false,
    ),
  ];
}
