import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateFile,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateFile_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateFile";
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateSd,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateSd_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateSd";

export interface appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate {
  //
  files?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateFile>;

  //
  sds?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateSd>;
}

export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateFile_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sds",
      "",
      appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateSd_GetTypes(),
      true,
      false,
    ),
  ];
}
