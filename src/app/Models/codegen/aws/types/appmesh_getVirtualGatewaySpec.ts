import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualGatewaySpecBackendDefault,
  appmesh_getVirtualGatewaySpecBackendDefault_GetTypes,
} from './appmesh_getVirtualGatewaySpecBackendDefault';
import {
  appmesh_getVirtualGatewaySpecListener,
  appmesh_getVirtualGatewaySpecListener_GetTypes,
} from './appmesh_getVirtualGatewaySpecListener';
import {
  appmesh_getVirtualGatewaySpecLogging,
  appmesh_getVirtualGatewaySpecLogging_GetTypes,
} from './appmesh_getVirtualGatewaySpecLogging';

export interface appmesh_getVirtualGatewaySpec {
  //
  backendDefaults?: Array<appmesh_getVirtualGatewaySpecBackendDefault>;

  //
  listeners?: Array<appmesh_getVirtualGatewaySpecListener>;

  //
  loggings?: Array<appmesh_getVirtualGatewaySpecLogging>;
}

export function appmesh_getVirtualGatewaySpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'backendDefaults',
      '',
      () => appmesh_getVirtualGatewaySpecBackendDefault_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'listeners',
      '',
      () => appmesh_getVirtualGatewaySpecListener_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'loggings',
      '',
      () => appmesh_getVirtualGatewaySpecLogging_GetTypes(),
      true,
      false,
    ),
  ];
}
