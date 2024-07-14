import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm";
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile";
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds";

export interface appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
  // TLS validation context trust for an AWS Certificate Manager (ACM) certificate.
  acm?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm;

  // TLS validation context trust for a local file certificate.
  file?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile;

  // TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds;
}

export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "acm",
      "TLS validation context trust for an AWS Certificate Manager (ACM) certificate.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "file",
      "TLS validation context trust for a local file certificate.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sds",
      "TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds_GetTypes(),
      false,
      false,
    ),
  ];
}
