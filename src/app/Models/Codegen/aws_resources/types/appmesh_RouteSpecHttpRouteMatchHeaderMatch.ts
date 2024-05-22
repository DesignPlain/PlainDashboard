import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecHttpRouteMatchHeaderMatchRange,
  appmesh_RouteSpecHttpRouteMatchHeaderMatchRange_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatchHeaderMatchRange";

export interface appmesh_RouteSpecHttpRouteMatchHeaderMatch {
  // Object that specifies the range of numbers that the header value sent by the client must be included in.
  range?: appmesh_RouteSpecHttpRouteMatchHeaderMatchRange;

  // The regex used to match the path.
  regex?: string;

  // Header value sent by the client must end with the specified characters.
  suffix?: string;

  // The exact path to match on.
  exact?: string;

  // Header value sent by the client must begin with the specified characters.
  prefix?: string;
}

export function appmesh_RouteSpecHttpRouteMatchHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "range",
      "Object that specifies the range of numbers that the header value sent by the client must be included in.",
      appmesh_RouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regex",
      "The regex used to match the path.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "suffix",
      "Header value sent by the client must end with the specified characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exact",
      "The exact path to match on.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Header value sent by the client must begin with the specified characters.",
      [],
      false,
      false,
    ),
  ];
}
