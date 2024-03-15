export interface CertificateSelfManaged {
  /*
The private key of the leaf certificate in PEM-encoded form.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PemPrivateKey?: string;

  /*
(Optional, Deprecated)
The private key of the leaf certificate in PEM-encoded form.
--Note--: This property is sensitive and will not be displayed in the plan.

> --Warning:-- `private_key_pem` is deprecated and will be removed in a future major release. Use `pem_private_key` instead.
*/
  PrivateKeyPem?: string;

  /*
(Optional, Deprecated)
The certificate chain in PEM-encoded form.
Leaf certificate comes first, followed by intermediate ones if any.
--Note--: This property is sensitive and will not be displayed in the plan.

> --Warning:-- `certificate_pem` is deprecated and will be removed in a future major release. Use `pem_certificate` instead.
*/
  CertificatePem?: string;

  /*
The certificate chain in PEM-encoded form.
Leaf certificate comes first, followed by intermediate ones if any.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PemCertificate?: string;
}
