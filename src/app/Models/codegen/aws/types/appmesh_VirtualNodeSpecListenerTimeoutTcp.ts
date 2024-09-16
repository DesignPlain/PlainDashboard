import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerTimeoutTcpIdle,
  appmesh_VirtualNodeSpecListenerTimeoutTcpIdle_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTimeoutTcpIdle';

export interface appmesh_VirtualNodeSpecListenerTimeoutTcp {
  // Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.
  idle?: appmesh_VirtualNodeSpecListenerTimeoutTcpIdle;
}

export function appmesh_VirtualNodeSpecListenerTimeoutTcp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'idle',
      'Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.',
      () => appmesh_VirtualNodeSpecListenerTimeoutTcpIdle_GetTypes(),
      false,
      false,
    ),
  ];
}
