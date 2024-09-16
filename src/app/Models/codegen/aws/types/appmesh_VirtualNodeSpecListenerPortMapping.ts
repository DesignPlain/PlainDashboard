import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_VirtualNodeSpecListenerPortMapping {
  // Port used for the port mapping.
  port?: number;

  // Protocol used for the port mapping. Valid values are `http`, `http2`, `tcp` and `grpc`.
  protocol?: string;
}

export function appmesh_VirtualNodeSpecListenerPortMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'port',
      'Port used for the port mapping.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'protocol',
      'Protocol used for the port mapping. Valid values are `http`, `http2`, `tcp` and `grpc`.',
      () => [],
      true,
      false,
    ),
  ];
}
