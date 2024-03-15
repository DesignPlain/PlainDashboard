export interface KeystoresAliasesKeyCertFileCertsInfoCertInfo {
  /*
(Output)
Public key component of the X.509 subject public key info.
*/
  PublicKey?: string;

  /*
(Output)
X.509 subject.
*/
  Subject?: string;

  /*
(Output)
X.509 subject alternative names (SANs) extension.
*/
  SubjectAlternativeNames?: Array<string>;

  /*
(Output)
Flag that specifies whether the certificate is valid.
Flag is set to Yes if the certificate is valid, No if expired, or Not yet if not yet valid.
*/
  IsValid?: string;

  /*
(Output)
X.509 notAfter validity period in milliseconds since epoch.
*/
  ExpiryDate?: string;

  /*
(Output)
X.509 issuer.
*/
  Issuer?: string;

  /*
(Output)
X.509 serial number.
*/
  SerialNumber?: string;

  /*
(Output)
X.509 signatureAlgorithm.
*/
  SigAlgName?: string;

  /*
(Output)
X.509 notBefore validity period in milliseconds since epoch.
*/
  ValidFrom?: string;

  /*
(Output)
X.509 version.
*/
  Version?: number;

  /*
(Output)
X.509 basic constraints extension.
*/
  BasicConstraints?: string;
}
