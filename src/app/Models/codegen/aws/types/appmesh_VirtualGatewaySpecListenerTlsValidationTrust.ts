import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds,
  appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds";
import {
  appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile,
  appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile";

export interface appmesh_VirtualGatewaySpecListenerTlsValidationTrust {
  // TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds;

  // TLS validation context trust for a local file certificate.
  file?: appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile;
}

export function appmesh_VirtualGatewaySpecListenerTlsValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sds",
      "TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.",
      () => appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "file",
      "TLS validation context trust for a local file certificate.",
      () => appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile_GetTypes(),
      false,
      false,
    ),
  ];
}
