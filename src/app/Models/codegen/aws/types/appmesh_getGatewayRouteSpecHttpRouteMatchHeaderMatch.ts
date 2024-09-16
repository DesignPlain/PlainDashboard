import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange,
  appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes,
} from './appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange';

export interface appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch {
  //
  suffix?: string;

  //
  exact?: string;

  //
  prefix?: string;

  //
  ranges?: Array<appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange>;

  //
  regex?: string;
}

export function appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'regex', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'suffix', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'exact', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'prefix', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'ranges',
      '',
      () =>
        appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(),
      true,
      false,
    ),
  ];
}
