import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecHttpRouteMatchHeaderMatch,
  appmesh_getRouteSpecHttpRouteMatchHeaderMatch_GetTypes,
} from './appmesh_getRouteSpecHttpRouteMatchHeaderMatch';

export interface appmesh_getRouteSpecHttpRouteMatchHeader {
  //
  matches?: Array<appmesh_getRouteSpecHttpRouteMatchHeaderMatch>;

  // Name of the route.
  name?: string;

  //
  invert?: boolean;
}

export function appmesh_getRouteSpecHttpRouteMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'matches',
      '',
      () => appmesh_getRouteSpecHttpRouteMatchHeaderMatch_GetTypes(),
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
