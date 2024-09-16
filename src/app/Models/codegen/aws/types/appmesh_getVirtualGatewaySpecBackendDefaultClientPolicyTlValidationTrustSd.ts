import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd {
  //
  secretName?: string;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'secretName',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
