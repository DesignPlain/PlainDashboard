import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname {
  // Default target host name to write to. Valid values: `ENABLED`, `DISABLED`.
  defaultTargetHostname?: string;
}

export function appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'defaultTargetHostname',
      'Default target host name to write to. Valid values: `ENABLED`, `DISABLED`.',
      () => [],
      true,
      false,
    ),
  ];
}
