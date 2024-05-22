import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames,
  appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames";
import {
  appmesh_VirtualGatewaySpecListenerTlsValidationTrust,
  appmesh_VirtualGatewaySpecListenerTlsValidationTrust_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTlsValidationTrust";

export interface appmesh_VirtualGatewaySpecListenerTlsValidation {
  // SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context.
  subjectAlternativeNames?: appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames;

  // TLS validation context trust.
  trust?: appmesh_VirtualGatewaySpecListenerTlsValidationTrust;
}

export function appmesh_VirtualGatewaySpecListenerTlsValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "trust",
      "TLS validation context trust.",
      appmesh_VirtualGatewaySpecListenerTlsValidationTrust_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "subjectAlternativeNames",
      "SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context.",
      appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames_GetTypes(),
      false,
      false,
    ),
  ];
}
