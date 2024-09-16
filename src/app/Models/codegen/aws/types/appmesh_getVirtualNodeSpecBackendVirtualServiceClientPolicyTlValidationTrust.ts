import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm_GetTypes,
} from './appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm';
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile_GetTypes,
} from './appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile';
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd_GetTypes,
} from './appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd';

export interface appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust {
  //
  acms?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm>;

  //
  files?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile>;

  //
  sds?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd>;
}

export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'sds',
      '',
      () =>
        appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'acms',
      '',
      () =>
        appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'files',
      '',
      () =>
        appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile_GetTypes(),
      true,
      false,
    ),
  ];
}
