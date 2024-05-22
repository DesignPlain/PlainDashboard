import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange {
  //
  end?: number;

  //
  start?: number;
}

export function appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "end", "", [], true, false),
    new DynamicUIProps(InputType.Number, "start", "", [], true, false),
  ];
}
