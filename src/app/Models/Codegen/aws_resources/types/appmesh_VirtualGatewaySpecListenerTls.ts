import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualGatewaySpecListenerTlsCertificate,
  appmesh_VirtualGatewaySpecListenerTlsCertificate_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTlsCertificate";
import {
  appmesh_VirtualGatewaySpecListenerTlsValidation,
  appmesh_VirtualGatewaySpecListenerTlsValidation_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTlsValidation";

export interface appmesh_VirtualGatewaySpecListenerTls {
  // Listener's TLS certificate.
  certificate?: appmesh_VirtualGatewaySpecListenerTlsCertificate;

  // Listener's TLS mode. Valid values: `DISABLED`, `PERMISSIVE`, `STRICT`.
  mode?: string;

  // Listener's Transport Layer Security (TLS) validation context.
  validation?: appmesh_VirtualGatewaySpecListenerTlsValidation;
}

export function appmesh_VirtualGatewaySpecListenerTls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "certificate",
      "Listener's TLS certificate.",
      appmesh_VirtualGatewaySpecListenerTlsCertificate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Listener's TLS mode. Valid values: `DISABLED`, `PERMISSIVE`, `STRICT`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "validation",
      "Listener's Transport Layer Security (TLS) validation context.",
      appmesh_VirtualGatewaySpecListenerTlsValidation_GetTypes(),
      false,
      false,
    ),
  ];
}
