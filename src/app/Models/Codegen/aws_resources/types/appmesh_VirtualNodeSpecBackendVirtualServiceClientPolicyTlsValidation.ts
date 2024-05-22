import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames";
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust";

export interface appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
  // SANs for a TLS validation context.
  subjectAlternativeNames?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames;

  // TLS validation context trust.
  trust?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust;
}

export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "subjectAlternativeNames",
      "SANs for a TLS validation context.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "trust",
      "TLS validation context trust.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
