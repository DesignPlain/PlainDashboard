import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface location_MapConfiguration {
  // Specifies the map style selected from an available data provider. Valid values can be found in the [Location Service CreateMap API Reference](https://docs.aws.amazon.com/location/latest/APIReference/API_CreateMap.html).
  style?: string;
}

export function location_MapConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'style',
      'Specifies the map style selected from an available data provider. Valid values can be found in the [Location Service CreateMap API Reference](https://docs.aws.amazon.com/location/latest/APIReference/API_CreateMap.html).',
      () => [],
      true,
      true,
    ),
  ];
}
