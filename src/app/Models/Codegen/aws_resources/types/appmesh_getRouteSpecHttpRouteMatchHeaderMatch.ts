import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange,
  appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange";

export interface appmesh_getRouteSpecHttpRouteMatchHeaderMatch {
  //
  exact?: string;

  //
  prefix?: string;

  //
  ranges?: Array<appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange>;

  //
  regex?: string;

  //
  suffix?: string;
}

export function appmesh_getRouteSpecHttpRouteMatchHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "suffix", "", [], true, false),
    new DynamicUIProps(InputType.String, "exact", "", [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ranges",
      "",
      appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "regex", "", [], true, false),
  ];
}
