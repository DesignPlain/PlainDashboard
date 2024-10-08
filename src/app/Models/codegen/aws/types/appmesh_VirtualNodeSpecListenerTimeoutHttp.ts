import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerTimeoutHttpIdle,
  appmesh_VirtualNodeSpecListenerTimeoutHttpIdle_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTimeoutHttpIdle';
import {
  appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest,
  appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest';

export interface appmesh_VirtualNodeSpecListenerTimeoutHttp {
  // Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.
  idle?: appmesh_VirtualNodeSpecListenerTimeoutHttpIdle;

  // Per request timeout.
  perRequest?: appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest;
}

export function appmesh_VirtualNodeSpecListenerTimeoutHttp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'perRequest',
      'Per request timeout.',
      () => appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'idle',
      'Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.',
      () => appmesh_VirtualNodeSpecListenerTimeoutHttpIdle_GetTypes(),
      false,
      false,
    ),
  ];
}
