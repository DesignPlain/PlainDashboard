import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getRouteSpecHttpRouteMatchPath,
  appmesh_getRouteSpecHttpRouteMatchPath_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteMatchPath";
import {
  appmesh_getRouteSpecHttpRouteMatchQueryParameter,
  appmesh_getRouteSpecHttpRouteMatchQueryParameter_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteMatchQueryParameter";
import {
  appmesh_getRouteSpecHttpRouteMatchHeader,
  appmesh_getRouteSpecHttpRouteMatchHeader_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteMatchHeader";

export interface appmesh_getRouteSpecHttpRouteMatch {
  //
  prefix?: string;

  //
  queryParameters?: Array<appmesh_getRouteSpecHttpRouteMatchQueryParameter>;

  //
  scheme?: string;

  //
  headers?: Array<appmesh_getRouteSpecHttpRouteMatchHeader>;

  //
  method?: string;

  //
  paths?: Array<appmesh_getRouteSpecHttpRouteMatchPath>;

  //
  port?: number;
}

export function appmesh_getRouteSpecHttpRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "paths",
      "",
      appmesh_getRouteSpecHttpRouteMatchPath_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "queryParameters",
      "",
      appmesh_getRouteSpecHttpRouteMatchQueryParameter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "scheme", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "",
      appmesh_getRouteSpecHttpRouteMatchHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "method", "", [], true, false),
  ];
}
