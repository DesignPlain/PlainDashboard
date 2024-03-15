export interface CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig {
  /*
A CA pool resource used to issue a certificate.
The CA pool string has a relative resource path following the form
"projects/{project}/locations/{location}/caPools/{caPool}".

- - -
*/
  CaPool?: string;
}
