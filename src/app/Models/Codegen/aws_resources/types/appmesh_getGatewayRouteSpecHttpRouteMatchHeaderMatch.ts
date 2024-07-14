import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange,
  appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange";

export interface appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch {
  //
  exact?: string;

  //
  prefix?: string;

  //
  ranges?: Array<appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange>;

  //
  regex?: string;

  //
  suffix?: string;
}

export function appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ranges",
      "",
      appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "regex", "", [], true, false),
    new DynamicUIProps(InputType.String, "suffix", "", [], true, false),
    new DynamicUIProps(InputType.String, "exact", "", [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", [], true, false),
  ];
}
