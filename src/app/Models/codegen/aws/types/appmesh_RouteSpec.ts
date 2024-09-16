import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_RouteSpecTcpRoute,
  appmesh_RouteSpecTcpRoute_GetTypes,
} from './appmesh_RouteSpecTcpRoute';
import {
  appmesh_RouteSpecGrpcRoute,
  appmesh_RouteSpecGrpcRoute_GetTypes,
} from './appmesh_RouteSpecGrpcRoute';
import {
  appmesh_RouteSpecHttp2Route,
  appmesh_RouteSpecHttp2Route_GetTypes,
} from './appmesh_RouteSpecHttp2Route';
import {
  appmesh_RouteSpecHttpRoute,
  appmesh_RouteSpecHttpRoute_GetTypes,
} from './appmesh_RouteSpecHttpRoute';

export interface appmesh_RouteSpec {
  // GRPC routing information for the route.
  grpcRoute?: appmesh_RouteSpecGrpcRoute;

  // HTTP/2 routing information for the route.
  http2Route?: appmesh_RouteSpecHttp2Route;

  // HTTP routing information for the route.
  httpRoute?: appmesh_RouteSpecHttpRoute;

  /*
Priority for the route, between `0` and `1000`.
Routes are matched based on the specified value, where `0` is the highest priority.
*/
  priority?: number;

  // TCP routing information for the route.
  tcpRoute?: appmesh_RouteSpecTcpRoute;
}

export function appmesh_RouteSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'grpcRoute',
      'GRPC routing information for the route.',
      () => appmesh_RouteSpecGrpcRoute_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'http2Route',
      'HTTP/2 routing information for the route.',
      () => appmesh_RouteSpecHttp2Route_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'httpRoute',
      'HTTP routing information for the route.',
      () => appmesh_RouteSpecHttpRoute_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'priority',
      'Priority for the route, between `0` and `1000`.\nRoutes are matched based on the specified value, where `0` is the highest priority.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tcpRoute',
      'TCP routing information for the route.',
      () => appmesh_RouteSpecTcpRoute_GetTypes(),
      false,
      false,
    ),
  ];
}
