import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate_GetTypes,
} from './appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate';
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation_GetTypes,
} from './appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation';

export interface appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTl {
  //
  enforce?: boolean;

  //
  ports?: Array<number>;

  //
  validations?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation>;

  //
  certificates?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate>;
}

export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTl_GetTypes(): DynamicUIProps[] {
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
        appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'certificates',
      '',
      () =>
        appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate_GetTypes(),
      true,
      false,
    ),
  ];
}
