import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_getVirtualNodeSpecServiceDiscoveryDn {
  //
  hostname?: string;

  //
  ipPreference?: string;

  //
  responseType?: string;
}

export function appmesh_getVirtualNodeSpecServiceDiscoveryDn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'hostname', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'ipPreference',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'responseType',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
