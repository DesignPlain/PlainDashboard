import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatchRange,
  appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatchRange";

export interface appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatch {
  // Header value sent by the client must include the specified characters.
  regex?: string;

  // Header value sent by the client must end with the specified characters.
  suffix?: string;

  // Header value sent by the client must match the specified value exactly.
  exact?: string;

  // Header value sent by the client must begin with the specified characters.
  prefix?: string;

  // Object that specifies the range of numbers that the header value sent by the client must be included in.
  range?: appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatchRange;
}

export function appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Header value sent by the client must begin with the specified characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "range",
      "Object that specifies the range of numbers that the header value sent by the client must be included in.",
      appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regex",
      "Header value sent by the client must include the specified characters.",
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
      "Header value sent by the client must match the specified value exactly.",
      [],
      false,
      false,
    ),
  ];
}
