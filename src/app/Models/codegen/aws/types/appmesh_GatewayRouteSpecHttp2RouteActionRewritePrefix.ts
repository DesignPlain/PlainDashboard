import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_GatewayRouteSpecHttp2RouteActionRewritePrefix {
  // Default prefix used to replace the incoming route prefix when rewritten. Valid values: `ENABLED`, `DISABLED`.
  defaultPrefix?: string;

  // Value used to replace the incoming route prefix when rewritten.
  value?: string;
}

export function appmesh_GatewayRouteSpecHttp2RouteActionRewritePrefix_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'defaultPrefix',
      'Default prefix used to replace the incoming route prefix when rewritten. Valid values: `ENABLED`, `DISABLED`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value used to replace the incoming route prefix when rewritten.',
      () => [],
      false,
      false,
    ),
  ];
}
