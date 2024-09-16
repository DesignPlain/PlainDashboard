import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust_GetTypes,
} from './appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust';
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName_GetTypes,
} from './appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName';

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation {
  //
  trusts?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust>;

  //
  subjectAlternativeNames?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'subjectAlternativeNames',
      '',
      () =>
        appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'trusts',
      '',
      () =>
        appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
