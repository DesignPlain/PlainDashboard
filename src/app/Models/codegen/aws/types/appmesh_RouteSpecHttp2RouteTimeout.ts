import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_RouteSpecHttp2RouteTimeoutPerRequest,
  appmesh_RouteSpecHttp2RouteTimeoutPerRequest_GetTypes,
} from './appmesh_RouteSpecHttp2RouteTimeoutPerRequest';
import {
  appmesh_RouteSpecHttp2RouteTimeoutIdle,
  appmesh_RouteSpecHttp2RouteTimeoutIdle_GetTypes,
} from './appmesh_RouteSpecHttp2RouteTimeoutIdle';

export interface appmesh_RouteSpecHttp2RouteTimeout {
  // Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.
  idle?: appmesh_RouteSpecHttp2RouteTimeoutIdle;

  // Per request timeout.
  perRequest?: appmesh_RouteSpecHttp2RouteTimeoutPerRequest;
}

export function appmesh_RouteSpecHttp2RouteTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'perRequest',
      'Per request timeout.',
      () => appmesh_RouteSpecHttp2RouteTimeoutPerRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'idle',
      'Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.',
      () => appmesh_RouteSpecHttp2RouteTimeoutIdle_GetTypes(),
      false,
      false,
    ),
  ];
}
