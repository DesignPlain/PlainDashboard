import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_GatewayRouteSpecHttpRouteActionRewritePath {
  // The exact path to match on.
  exact?: string;
}

export function appmesh_GatewayRouteSpecHttpRouteActionRewritePath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "exact",
      "The exact path to match on.",
      [],
      true,
      false,
    ),
  ];
}
