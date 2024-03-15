import { CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage } from "./CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage";
import { CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage } from "./CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage";
import { CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage } from "./CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage";

export interface CertificateTemplatePredefinedValuesKeyUsage {
  // Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.
  UnknownExtendedKeyUsages?: Array<CertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsage>;

  // Describes high-level ways in which a key may be used.
  BaseKeyUsage?: CertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage;

  // Detailed scenarios in which a key may be used.
  ExtendedKeyUsage?: CertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage;
}
