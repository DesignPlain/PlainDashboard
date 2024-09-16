import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_RouteSpecTcpRouteMatch {
  //
  port?: number;
}

export function appmesh_RouteSpecTcpRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'port', '', () => [], false, false),
  ];
}
