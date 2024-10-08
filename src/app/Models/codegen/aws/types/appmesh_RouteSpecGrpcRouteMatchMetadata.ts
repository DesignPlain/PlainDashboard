import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_RouteSpecGrpcRouteMatchMetadataMatch,
  appmesh_RouteSpecGrpcRouteMatchMetadataMatch_GetTypes,
} from './appmesh_RouteSpecGrpcRouteMatchMetadataMatch';

export interface appmesh_RouteSpecGrpcRouteMatchMetadata {
  // If `true`, the match is on the opposite of the `match` criteria. Default is `false`.
  invert?: boolean;

  // Data to match from the request.
  match?: appmesh_RouteSpecGrpcRouteMatchMetadataMatch;

  // Name of the route. Must be between 1 and 50 characters in length.
  name?: string;
}

export function appmesh_RouteSpecGrpcRouteMatchMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'invert',
      'If `true`, the match is on the opposite of the `match` criteria. Default is `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'match',
      'Data to match from the request.',
      () => appmesh_RouteSpecGrpcRouteMatchMetadataMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the route. Must be between 1 and 50 characters in length.',
      () => [],
      true,
      false,
    ),
  ];
}
