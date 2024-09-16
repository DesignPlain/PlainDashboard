import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest {
  // Unit of time. Valid values: `ms`, `s`.
  unit?: string;

  // Number of time units. Minimum value of `0`.
  value?: number;
}

export function appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'unit',
      'Unit of time. Valid values: `ms`, `s`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'value',
      'Number of time units. Minimum value of `0`.',
      () => [],
      true,
      false,
    ),
  ];
}
