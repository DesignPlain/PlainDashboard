import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_getVirtualNodeSpecListenerConnectionPoolHttp {
  //
  maxConnections?: number;

  //
  maxPendingRequests?: number;
}

export function appmesh_getVirtualNodeSpecListenerConnectionPoolHttp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxConnections',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxPendingRequests',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
