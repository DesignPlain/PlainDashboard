import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile";
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds";

export interface appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
  // Local file certificate.
  file?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile;

  // A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds;
}

export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "file",
      "Local file certificate.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sds",
      "A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds_GetTypes(),
      false,
      false,
    ),
  ];
}
