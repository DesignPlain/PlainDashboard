import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicy,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicy_GetTypes,
} from './appmesh_VirtualGatewaySpecBackendDefaultsClientPolicy';

export interface appmesh_VirtualGatewaySpecBackendDefaults {
  // Default client policy for virtual gateway backends.
  clientPolicy?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicy;
}

export function appmesh_VirtualGatewaySpecBackendDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'clientPolicy',
      'Default client policy for virtual gateway backends.',
      () => appmesh_VirtualGatewaySpecBackendDefaultsClientPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
