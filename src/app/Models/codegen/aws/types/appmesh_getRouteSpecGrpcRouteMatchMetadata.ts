import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecGrpcRouteMatchMetadataMatch,
  appmesh_getRouteSpecGrpcRouteMatchMetadataMatch_GetTypes,
} from './appmesh_getRouteSpecGrpcRouteMatchMetadataMatch';

export interface appmesh_getRouteSpecGrpcRouteMatchMetadata {
  //
  invert?: boolean;

  //
  matches?: Array<appmesh_getRouteSpecGrpcRouteMatchMetadataMatch>;

  // Name of the route.
  name?: string;
}

export function appmesh_getRouteSpecGrpcRouteMatchMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'matches',
      '',
      () => appmesh_getRouteSpecGrpcRouteMatchMetadataMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the route.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, 'invert', '', () => [], true, false),
  ];
}
