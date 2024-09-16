import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_RouteSpecHttpRouteMatchQueryParameterMatch,
  appmesh_RouteSpecHttpRouteMatchQueryParameterMatch_GetTypes,
} from './appmesh_RouteSpecHttpRouteMatchQueryParameterMatch';

export interface appmesh_RouteSpecHttpRouteMatchQueryParameter {
  // Name for the query parameter that will be matched on.
  name?: string;

  // The query parameter to match on.
  match?: appmesh_RouteSpecHttpRouteMatchQueryParameterMatch;
}

export function appmesh_RouteSpecHttpRouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name for the query parameter that will be matched on.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'match',
      'The query parameter to match on.',
      () => appmesh_RouteSpecHttpRouteMatchQueryParameterMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
