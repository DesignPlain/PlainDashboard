import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_RouteSpecTcpRouteTimeoutIdle {
  // Number of time units. Minimum value of `0`.
  value?: number;

  // Unit of time. Valid values: `ms`, `s`.
  unit?: string;
}

export function appmesh_RouteSpecTcpRouteTimeoutIdle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'value',
      'Number of time units. Minimum value of `0`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'unit',
      'Unit of time. Valid values: `ms`, `s`.',
      () => [],
      true,
      false,
    ),
  ];
}
