import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecGrpcRouteMatchMetadata,
  appmesh_getRouteSpecGrpcRouteMatchMetadata_GetTypes,
} from './appmesh_getRouteSpecGrpcRouteMatchMetadata';

export interface appmesh_getRouteSpecGrpcRouteMatch {
  //
  metadatas?: Array<appmesh_getRouteSpecGrpcRouteMatchMetadata>;

  //
  methodName?: string;

  //
  port?: number;

  //
  prefix?: string;

  //
  serviceName?: string;
}

export function appmesh_getRouteSpecGrpcRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'metadatas',
      '',
      () => appmesh_getRouteSpecGrpcRouteMatchMetadata_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'methodName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, 'port', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'prefix', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'serviceName',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
