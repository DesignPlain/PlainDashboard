import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_RouteSpecTcpRouteMatch {
  // The port number to match from the request.
  port?: number;
}

export function appmesh_RouteSpecTcpRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number to match from the request.",
      [],
      false,
      false,
    ),
  ];
}
