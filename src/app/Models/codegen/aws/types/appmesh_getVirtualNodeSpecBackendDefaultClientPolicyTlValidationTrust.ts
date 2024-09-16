import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm_GetTypes,
} from './appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm';
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustFile,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustFile_GetTypes,
} from './appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustFile';
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustSd,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustSd_GetTypes,
} from './appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustSd';

export interface appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust {
  //
  acms?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm>;

  //
  files?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustFile>;

  //
  sds?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustSd>;
}

export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'acms',
      '',
      () =>
        appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'files',
      '',
      () =>
        appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustFile_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'sds',
      '',
      () =>
        appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustSd_GetTypes(),
      true,
      false,
    ),
  ];
}
