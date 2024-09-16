import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerTlsValidationTrust,
  appmesh_VirtualNodeSpecListenerTlsValidationTrust_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTlsValidationTrust';
import {
  appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames,
  appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames';

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
      'subjectAlternativeNames',
      'SANs for a TLS validation context.',
      () =>
        appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'trust',
      'TLS validation context trust.',
      () => appmesh_VirtualNodeSpecListenerTlsValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
