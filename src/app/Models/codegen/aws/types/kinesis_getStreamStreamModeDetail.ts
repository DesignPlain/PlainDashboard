import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_getStreamStreamModeDetail {
  // Capacity mode of the stream. Either `ON_DEMAND` or `PROVISIONED`.
  streamMode?: string;
}

export function kinesis_getStreamStreamModeDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'streamMode',
      'Capacity mode of the stream. Either `ON_DEMAND` or `PROVISIONED`.',
      () => [],
      true,
      false,
    ),
  ];
}
