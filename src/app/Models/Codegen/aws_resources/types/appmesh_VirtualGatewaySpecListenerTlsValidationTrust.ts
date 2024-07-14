import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile,
  appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile";
import {
  appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds,
  appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds";

export interface appmesh_VirtualGatewaySpecListenerTlsValidationTrust {
  // TLS validation context trust for a local file certificate.
  file?: appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile;

  // TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds;
}

export function appmesh_VirtualGatewaySpecListenerTlsValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "file",
      "TLS validation context trust for a local file certificate.",
      appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sds",
      "TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.",
      appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds_GetTypes(),
      false,
      false,
    ),
  ];
}
