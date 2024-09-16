import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualServiceSpecProviderVirtualNode,
  appmesh_getVirtualServiceSpecProviderVirtualNode_GetTypes,
} from './appmesh_getVirtualServiceSpecProviderVirtualNode';
import {
  appmesh_getVirtualServiceSpecProviderVirtualRouter,
  appmesh_getVirtualServiceSpecProviderVirtualRouter_GetTypes,
} from './appmesh_getVirtualServiceSpecProviderVirtualRouter';

export interface appmesh_getVirtualServiceSpecProvider {
  //
  virtualNodes?: Array<appmesh_getVirtualServiceSpecProviderVirtualNode>;

  //
  virtualRouters?: Array<appmesh_getVirtualServiceSpecProviderVirtualRouter>;
}

export function appmesh_getVirtualServiceSpecProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'virtualNodes',
      '',
      () => appmesh_getVirtualServiceSpecProviderVirtualNode_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'virtualRouters',
      '',
      () => appmesh_getVirtualServiceSpecProviderVirtualRouter_GetTypes(),
      true,
      false,
    ),
  ];
}
