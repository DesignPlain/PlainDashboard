import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_VirtualServiceSpecProviderVirtualRouter {
  // Name of the virtual router that is acting as a service provider. Must be between 1 and 255 characters in length.
  virtualRouterName?: string;
}

export function appmesh_VirtualServiceSpecProviderVirtualRouter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'virtualRouterName',
      'Name of the virtual router that is acting as a service provider. Must be between 1 and 255 characters in length.',
      () => [],
      true,
      false,
    ),
  ];
}
