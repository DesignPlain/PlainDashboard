import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameterMatch {
  // Header value sent by the client must match the specified value exactly.
  exact?: string;
}

export function appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes(): DynamicUIProps[] {
  return [
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
