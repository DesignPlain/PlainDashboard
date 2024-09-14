import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm";
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile";
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds";

export interface appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
  // TLS validation context trust for an AWS Certificate Manager (ACM) certificate.
  acm?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;

  // TLS validation context trust for a local file certificate.
  file?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile;

  // TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}

export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "acm",
      "TLS validation context trust for an AWS Certificate Manager (ACM) certificate.",
      () =>
        appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "file",
      "TLS validation context trust for a local file certificate.",
      () =>
        appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sds",
      "TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.",
      () =>
        appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds_GetTypes(),
      false,
      false,
    ),
  ];
}
