import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getGatewayRouteSpecHttp2RouteActionRewritePrefix {
  //
  defaultPrefix?: string;

  //
  value?: string;
}

export function appmesh_getGatewayRouteSpecHttp2RouteActionRewritePrefix_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "defaultPrefix", "", [], true, false),
    new DynamicUIProps(InputType.String, "value", "", [], true, false),
  ];
}
