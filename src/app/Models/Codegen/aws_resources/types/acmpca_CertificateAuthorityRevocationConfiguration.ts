import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  acmpca_CertificateAuthorityRevocationConfigurationOcspConfiguration,
  acmpca_CertificateAuthorityRevocationConfigurationOcspConfiguration_GetTypes,
} from "./acmpca_CertificateAuthorityRevocationConfigurationOcspConfiguration";
import {
  acmpca_CertificateAuthorityRevocationConfigurationCrlConfiguration,
  acmpca_CertificateAuthorityRevocationConfigurationCrlConfiguration_GetTypes,
} from "./acmpca_CertificateAuthorityRevocationConfigurationCrlConfiguration";

export interface acmpca_CertificateAuthorityRevocationConfiguration {
  // Nested argument containing configuration of the certificate revocation list (CRL), if any, maintained by the certificate authority. Defined below.
  crlConfiguration?: acmpca_CertificateAuthorityRevocationConfigurationCrlConfiguration;

  /*
Nested argument containing configuration of
the custom OCSP responder endpoint. Defined below.
*/
  ocspConfiguration?: acmpca_CertificateAuthorityRevocationConfigurationOcspConfiguration;
}

export function acmpca_CertificateAuthorityRevocationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "crlConfiguration",
      "Nested argument containing configuration of the certificate revocation list (CRL), if any, maintained by the certificate authority. Defined below.",
      acmpca_CertificateAuthorityRevocationConfigurationCrlConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ocspConfiguration",
      "Nested argument containing configuration of\nthe custom OCSP responder endpoint. Defined below.",
      acmpca_CertificateAuthorityRevocationConfigurationOcspConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
