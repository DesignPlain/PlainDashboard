import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
  // One or more ACM ARNs.
  certificateAuthorityArns?: Array<string>;
}

export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'certificateAuthorityArns',
      'One or more ACM ARNs.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
