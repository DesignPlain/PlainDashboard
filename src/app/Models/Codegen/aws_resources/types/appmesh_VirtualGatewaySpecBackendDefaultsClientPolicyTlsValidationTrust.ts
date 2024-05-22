import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm_GetTypes,
} from "./appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm";
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile_GetTypes,
} from "./appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile";
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds_GetTypes,
} from "./appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds";

export interface appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
  // TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds;

  // TLS validation context trust for an AWS Certificate Manager (ACM) certificate.
  acm?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm;

  // TLS validation context trust for a local file certificate.
  file?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile;
}

export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sds",
      "TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.",
      appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "acm",
      "TLS validation context trust for an AWS Certificate Manager (ACM) certificate.",
      appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "file",
      "TLS validation context trust for a local file certificate.",
      appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile_GetTypes(),
      false,
      false,
    ),
  ];
}
