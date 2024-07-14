import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_GatewayRouteSpecHttpRouteActionRewriteHostname {
  // Default target host name to write to. Valid values: `ENABLED`, `DISABLED`.
  defaultTargetHostname?: string;
}

export function appmesh_GatewayRouteSpecHttpRouteActionRewriteHostname_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defaultTargetHostname",
      "Default target host name to write to. Valid values: `ENABLED`, `DISABLED`.",
      [],
      true,
      false,
    ),
  ];
}
