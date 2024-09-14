import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange,
  appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange";

export interface appmesh_getRouteSpecHttpRouteMatchHeaderMatch {
  //
  regex?: string;

  //
  suffix?: string;

  //
  exact?: string;

  //
  prefix?: string;

  //
  ranges?: Array<appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange>;
}

export function appmesh_getRouteSpecHttpRouteMatchHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "exact", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ranges",
      "",
      () => appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "regex", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "suffix", "", () => [], true, false),
  ];
}
