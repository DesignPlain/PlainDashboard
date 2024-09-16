import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm {
  //
  certificateAuthorityArns?: Array<string>;
}

export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'certificateAuthorityArns',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
