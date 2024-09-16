import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecGrpcRouteMatchMetadataMatchRange,
  appmesh_getRouteSpecGrpcRouteMatchMetadataMatchRange_GetTypes,
} from './appmesh_getRouteSpecGrpcRouteMatchMetadataMatchRange';

export interface appmesh_getRouteSpecGrpcRouteMatchMetadataMatch {
  //
  regex?: string;

  //
  suffix?: string;

  //
  exact?: string;

  //
  prefix?: string;

  //
  ranges?: Array<appmesh_getRouteSpecGrpcRouteMatchMetadataMatchRange>;
}

export function appmesh_getRouteSpecGrpcRouteMatchMetadataMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'regex', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'suffix', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'exact', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'prefix', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'ranges',
      '',
      () => appmesh_getRouteSpecGrpcRouteMatchMetadataMatchRange_GetTypes(),
      true,
      false,
    ),
  ];
}
