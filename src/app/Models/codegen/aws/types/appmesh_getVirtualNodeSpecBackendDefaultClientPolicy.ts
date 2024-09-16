import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl_GetTypes,
} from './appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl';

export interface appmesh_getVirtualNodeSpecBackendDefaultClientPolicy {
  //
  tls?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl>;
}

export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'tls',
      '',
      () => appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl_GetTypes(),
      true,
      false,
    ),
  ];
}
