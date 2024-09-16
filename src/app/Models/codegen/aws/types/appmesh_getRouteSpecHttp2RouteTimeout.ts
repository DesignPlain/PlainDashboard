import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecHttp2RouteTimeoutIdle,
  appmesh_getRouteSpecHttp2RouteTimeoutIdle_GetTypes,
} from './appmesh_getRouteSpecHttp2RouteTimeoutIdle';
import {
  appmesh_getRouteSpecHttp2RouteTimeoutPerRequest,
  appmesh_getRouteSpecHttp2RouteTimeoutPerRequest_GetTypes,
} from './appmesh_getRouteSpecHttp2RouteTimeoutPerRequest';

export interface appmesh_getRouteSpecHttp2RouteTimeout {
  //
  idles?: Array<appmesh_getRouteSpecHttp2RouteTimeoutIdle>;

  //
  perRequests?: Array<appmesh_getRouteSpecHttp2RouteTimeoutPerRequest>;
}

export function appmesh_getRouteSpecHttp2RouteTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'idles',
      '',
      () => appmesh_getRouteSpecHttp2RouteTimeoutIdle_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'perRequests',
      '',
      () => appmesh_getRouteSpecHttp2RouteTimeoutPerRequest_GetTypes(),
      true,
      false,
    ),
  ];
}
