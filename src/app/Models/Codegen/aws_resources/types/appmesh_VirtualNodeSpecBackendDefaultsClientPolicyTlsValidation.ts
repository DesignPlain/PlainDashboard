import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames";
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust";

export interface appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
  // SANs for a TLS validation context.
  subjectAlternativeNames?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;

  // TLS validation context trust.
  trust?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust;
}

export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "trust",
      "TLS validation context trust.",
      appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "subjectAlternativeNames",
      "SANs for a TLS validation context.",
      appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames_GetTypes(),
      false,
      false,
    ),
  ];
}
