import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicy,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicy_GetTypes,
} from './appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicy';

export interface appmesh_VirtualNodeSpecBackendVirtualService {
  // Name of the virtual service that is acting as a virtual node backend. Must be between 1 and 255 characters in length.
  virtualServiceName?: string;

  // Client policy for the backend.
  clientPolicy?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicy;
}

export function appmesh_VirtualNodeSpecBackendVirtualService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'clientPolicy',
      'Client policy for the backend.',
      () => appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'virtualServiceName',
      'Name of the virtual service that is acting as a virtual node backend. Must be between 1 and 255 characters in length.',
      () => [],
      true,
      false,
    ),
  ];
}
