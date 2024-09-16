import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecHttp2RouteMatchQueryParameter,
  appmesh_getRouteSpecHttp2RouteMatchQueryParameter_GetTypes,
} from './appmesh_getRouteSpecHttp2RouteMatchQueryParameter';
import {
  appmesh_getRouteSpecHttp2RouteMatchHeader,
  appmesh_getRouteSpecHttp2RouteMatchHeader_GetTypes,
} from './appmesh_getRouteSpecHttp2RouteMatchHeader';
import {
  appmesh_getRouteSpecHttp2RouteMatchPath,
  appmesh_getRouteSpecHttp2RouteMatchPath_GetTypes,
} from './appmesh_getRouteSpecHttp2RouteMatchPath';

export interface appmesh_getRouteSpecHttp2RouteMatch {
  //
  queryParameters?: Array<appmesh_getRouteSpecHttp2RouteMatchQueryParameter>;

  //
  scheme?: string;

  //
  headers?: Array<appmesh_getRouteSpecHttp2RouteMatchHeader>;

  //
  method?: string;

  //
  paths?: Array<appmesh_getRouteSpecHttp2RouteMatchPath>;

  //
  port?: number;

  //
  prefix?: string;
}

export function appmesh_getRouteSpecHttp2RouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'scheme', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'headers',
      '',
      () => appmesh_getRouteSpecHttp2RouteMatchHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'method', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'paths',
      '',
      () => appmesh_getRouteSpecHttp2RouteMatchPath_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, 'port', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'prefix', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'queryParameters',
      '',
      () => appmesh_getRouteSpecHttp2RouteMatchQueryParameter_GetTypes(),
      true,
      false,
    ),
  ];
}
