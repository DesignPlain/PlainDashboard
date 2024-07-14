import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_GatewayRouteSpecHttp2RouteMatchPath {
  // The exact path to match on.
  exact?: string;

  // The regex used to match the path.
  regex?: string;
}

export function appmesh_GatewayRouteSpecHttp2RouteMatchPath_GetTypes(): DynamicUIProps[] {
  return [
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
      "regex",
      "The regex used to match the path.",
      [],
      false,
      false,
    ),
  ];
}
