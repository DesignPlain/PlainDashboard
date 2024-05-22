import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile";
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd";

export interface appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate {
  //
  files?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile>;

  //
  sds?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd>;
}

export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "sds",
      "",
      appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile_GetTypes(),
      true,
      false,
    ),
  ];
}
