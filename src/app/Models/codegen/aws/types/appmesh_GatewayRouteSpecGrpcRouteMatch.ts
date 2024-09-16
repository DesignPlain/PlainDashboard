import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_GatewayRouteSpecGrpcRouteMatch {
  // The port number to match from the request.
  port?: number;

  // Fully qualified domain name for the service to match from the request.
  serviceName?: string;
}

export function appmesh_GatewayRouteSpecGrpcRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'port',
      'The port number to match from the request.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceName',
      'Fully qualified domain name for the service to match from the request.',
      () => [],
      true,
      false,
    ),
  ];
}
