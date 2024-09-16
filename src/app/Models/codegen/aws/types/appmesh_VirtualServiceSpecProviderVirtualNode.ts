import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_VirtualServiceSpecProviderVirtualNode {
  // Name of the virtual node that is acting as a service provider. Must be between 1 and 255 characters in length.
  virtualNodeName?: string;
}

export function appmesh_VirtualServiceSpecProviderVirtualNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'virtualNodeName',
      'Name of the virtual node that is acting as a service provider. Must be between 1 and 255 characters in length.',
      () => [],
      true,
      false,
    ),
  ];
}
