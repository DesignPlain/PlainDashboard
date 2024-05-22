import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getGatewayRouteSpecHttpRouteMatchHostname {
  //
  exact?: string;

  //
  suffix?: string;
}

export function appmesh_getGatewayRouteSpecHttpRouteMatchHostname_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "exact", "", [], true, false),
    new DynamicUIProps(InputType.String, "suffix", "", [], true, false),
  ];
}
