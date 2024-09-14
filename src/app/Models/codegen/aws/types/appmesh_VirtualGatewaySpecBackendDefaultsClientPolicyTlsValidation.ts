import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames_GetTypes,
} from "./appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames";
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust_GetTypes,
} from "./appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust";

export interface appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
  // SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context.
  subjectAlternativeNames?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;

  // TLS validation context trust.
  trust?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust;
}

export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "subjectAlternativeNames",
      "SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context.",
      () =>
        appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "trust",
      "TLS validation context trust.",
      () =>
        appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
