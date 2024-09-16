import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage,
  certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage_GetTypes,
} from './certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage';
import {
  certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage,
  certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage_GetTypes,
} from './certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage';
import {
  certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage,
  certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from './certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage';

export interface certificateauthority_CertificateTemplatePredefinedValuesKeyUsage {
  // Describes high-level ways in which a key may be used.
  baseKeyUsage?: certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage;

  // Detailed scenarios in which a key may be used.
  extendedKeyUsage?: certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage;

  // Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.
  unknownExtendedKeyUsages?: Array<certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage>;
}

export function certificateauthority_CertificateTemplatePredefinedValuesKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'extendedKeyUsage',
      'Detailed scenarios in which a key may be used.',
      () =>
        certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'unknownExtendedKeyUsages',
      'Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.',
      () =>
        certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'baseKeyUsage',
      'Describes high-level ways in which a key may be used.',
      () =>
        certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage_GetTypes(),
      false,
      false,
    ),
  ];
}
