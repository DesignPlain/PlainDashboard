import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage,
  Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage";
import {
  Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage,
  Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage";
import {
  Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage,
  Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage";

export interface Certificateauthority_CertificateTemplatePredefinedValuesKeyUsage {
  // Describes high-level ways in which a key may be used.
  BaseKeyUsage?: Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage;

  // Detailed scenarios in which a key may be used.
  ExtendedKeyUsage?: Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage;

  // Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.
  UnknownExtendedKeyUsages?: Array<Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage>;
}

export function Certificateauthority_CertificateTemplatePredefinedValuesKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BaseKeyUsage",
      "Describes high-level ways in which a key may be used.",
      Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExtendedKeyUsage",
      "Detailed scenarios in which a key may be used.",
      Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UnknownExtendedKeyUsages",
      "Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.",
      Certificateauthority_CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
  ];
}
