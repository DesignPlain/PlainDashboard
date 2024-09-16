import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId,
  certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId_GetTypes,
} from './certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId';

export interface certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension {
  // Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
  critical?: boolean;

  // Required. The OID for this X.509 extension.
  objectId?: certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId;

  // Required. The value of this X.509 extension.
  value?: string;
}

export function certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'critical',
      'Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'objectId',
      'Required. The OID for this X.509 extension.',
      () =>
        certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Required. The value of this X.509 extension.',
      () => [],
      true,
      false,
    ),
  ];
}
