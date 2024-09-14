import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  acmpca_CertificateAuthorityCertificateAuthorityConfigurationSubject,
  acmpca_CertificateAuthorityCertificateAuthorityConfigurationSubject_GetTypes,
} from "./acmpca_CertificateAuthorityCertificateAuthorityConfigurationSubject";

export interface acmpca_CertificateAuthorityCertificateAuthorityConfiguration {
  // Name of the algorithm your private CA uses to sign certificate requests. Valid values can be found in the [ACM PCA Documentation](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CertificateAuthorityConfiguration.html).
  signingAlgorithm?: string;

  // Nested argument that contains X.500 distinguished name information. At least one nested attribute must be specified.
  subject?: acmpca_CertificateAuthorityCertificateAuthorityConfigurationSubject;

  // Type of the public key algorithm and size, in bits, of the key pair that your key pair creates when it issues a certificate. Valid values can be found in the [ACM PCA Documentation](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CertificateAuthorityConfiguration.html).
  keyAlgorithm?: string;
}

export function acmpca_CertificateAuthorityCertificateAuthorityConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "signingAlgorithm",
      "Name of the algorithm your private CA uses to sign certificate requests. Valid values can be found in the [ACM PCA Documentation](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CertificateAuthorityConfiguration.html).",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "subject",
      "Nested argument that contains X.500 distinguished name information. At least one nested attribute must be specified.",
      () =>
        acmpca_CertificateAuthorityCertificateAuthorityConfigurationSubject_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyAlgorithm",
      "Type of the public key algorithm and size, in bits, of the key pair that your key pair creates when it issues a certificate. Valid values can be found in the [ACM PCA Documentation](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CertificateAuthorityConfiguration.html).",
      () => [],
      true,
      true,
    ),
  ];
}
