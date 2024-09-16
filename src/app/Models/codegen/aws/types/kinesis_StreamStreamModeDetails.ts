import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_StreamStreamModeDetails {
  // Specifies the capacity mode of the stream. Must be either `PROVISIONED` or `ON_DEMAND`.
  streamMode?: string;
}

export function kinesis_StreamStreamModeDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'streamMode',
      'Specifies the capacity mode of the stream. Must be either `PROVISIONED` or `ON_DEMAND`.',
      () => [],
      true,
      false,
    ),
  ];
}
