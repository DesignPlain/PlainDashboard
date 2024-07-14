import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile";
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd";
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm";

export interface appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust {
  //
  sds?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd>;

  //
  acms?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm>;

  //
  files?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile>;
}

export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "sds",
      "",
      appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acms",
      "",
      appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile_GetTypes(),
      true,
      false,
    ),
  ];
}
