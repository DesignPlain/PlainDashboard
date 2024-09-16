import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualServiceSpecProviderVirtualNode,
  appmesh_VirtualServiceSpecProviderVirtualNode_GetTypes,
} from './appmesh_VirtualServiceSpecProviderVirtualNode';
import {
  appmesh_VirtualServiceSpecProviderVirtualRouter,
  appmesh_VirtualServiceSpecProviderVirtualRouter_GetTypes,
} from './appmesh_VirtualServiceSpecProviderVirtualRouter';

export interface appmesh_VirtualServiceSpecProvider {
  // Virtual node associated with a virtual service.
  virtualNode?: appmesh_VirtualServiceSpecProviderVirtualNode;

  // Virtual router associated with a virtual service.
  virtualRouter?: appmesh_VirtualServiceSpecProviderVirtualRouter;
}

export function appmesh_VirtualServiceSpecProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'virtualNode',
      'Virtual node associated with a virtual service.',
      () => appmesh_VirtualServiceSpecProviderVirtualNode_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'virtualRouter',
      'Virtual router associated with a virtual service.',
      () => appmesh_VirtualServiceSpecProviderVirtualRouter_GetTypes(),
      false,
      false,
    ),
  ];
}
