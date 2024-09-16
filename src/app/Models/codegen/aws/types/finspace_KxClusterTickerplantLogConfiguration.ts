import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface finspace_KxClusterTickerplantLogConfiguration {
  //
  tickerplantLogVolumes?: Array<string>;
}

export function finspace_KxClusterTickerplantLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'tickerplantLogVolumes',
      '',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
