import { CertificateTemplatePredefinedValuesAdditionalExtension } from "./CertificateTemplatePredefinedValuesAdditionalExtension";
import { CertificateTemplatePredefinedValuesCaOptions } from "./CertificateTemplatePredefinedValuesCaOptions";
import { CertificateTemplatePredefinedValuesKeyUsage } from "./CertificateTemplatePredefinedValuesKeyUsage";
import { CertificateTemplatePredefinedValuesPolicyId } from "./CertificateTemplatePredefinedValuesPolicyId";

export interface CertificateTemplatePredefinedValues {
  // Optional. Describes custom X.509 extensions.
  AdditionalExtensions?: Array<CertificateTemplatePredefinedValuesAdditionalExtension>;

  // Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
  AiaOcspServers?: Array<string>;

  // Optional. Describes options in this X509Parameters that are relevant in a CA certificate.
  CaOptions?: CertificateTemplatePredefinedValuesCaOptions;

  // Optional. Indicates the intended use for keys that correspond to a certificate.
  KeyUsage?: CertificateTemplatePredefinedValuesKeyUsage;

  // Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
  PolicyIds?: Array<CertificateTemplatePredefinedValuesPolicyId>;
}
