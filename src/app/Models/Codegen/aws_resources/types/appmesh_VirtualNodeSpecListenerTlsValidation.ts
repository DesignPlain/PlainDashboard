import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames,
  appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames";
import {
  appmesh_VirtualNodeSpecListenerTlsValidationTrust,
  appmesh_VirtualNodeSpecListenerTlsValidationTrust_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTlsValidationTrust";

export interface appmesh_VirtualNodeSpecListenerTlsValidation {
  // SANs for a TLS validation context.
  subjectAlternativeNames?: appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames;

  // TLS validation context trust.
  trust?: appmesh_VirtualNodeSpecListenerTlsValidationTrust;
}

export function appmesh_VirtualNodeSpecListenerTlsValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "subjectAlternativeNames",
      "SANs for a TLS validation context.",
      appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "trust",
      "TLS validation context trust.",
      appmesh_VirtualNodeSpecListenerTlsValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
