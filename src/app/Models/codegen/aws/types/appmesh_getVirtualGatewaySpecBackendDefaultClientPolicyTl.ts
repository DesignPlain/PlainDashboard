import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation_GetTypes,
} from './appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation';
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate_GetTypes,
} from './appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate';

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl {
  //
  enforce?: boolean;

  //
  ports?: Array<number>;

  //
  validations?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation>;

  //
  certificates?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'enforce', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'ports',
      '',
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'validations',
      '',
      () =>
        appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'certificates',
      '',
      () =>
        appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate_GetTypes(),
      true,
      false,
    ),
  ];
}
