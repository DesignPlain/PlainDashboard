import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getGatewayRouteSpecHttpRouteActionRewritePrefix {
  //
  defaultPrefix?: string;

  //
  value?: string;
}

export function appmesh_getGatewayRouteSpecHttpRouteActionRewritePrefix_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defaultPrefix",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "value", "", () => [], true, false),
  ];
}
