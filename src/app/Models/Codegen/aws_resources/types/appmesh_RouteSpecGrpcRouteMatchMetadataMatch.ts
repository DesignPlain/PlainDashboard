import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange,
  appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange";

export interface appmesh_RouteSpecGrpcRouteMatchMetadataMatch {
  // The exact path to match on.
  exact?: string;

  // Header value sent by the client must begin with the specified characters.
  prefix?: string;

  // Object that specifies the range of numbers that the header value sent by the client must be included in.
  range?: appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange;

  // The regex used to match the path.
  regex?: string;

  // Header value sent by the client must end with the specified characters.
  suffix?: string;
}

export function appmesh_RouteSpecGrpcRouteMatchMetadataMatch_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.Object,
      "range",
      "Object that specifies the range of numbers that the header value sent by the client must be included in.",
      appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange_GetTypes(),
      false,
      false,
    ),
  ];
}
