import { CertificateTemplateIdentityConstraintsCelExpression } from "./CertificateTemplateIdentityConstraintsCelExpression";

export interface CertificateTemplateIdentityConstraints {
  // Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.
  AllowSubjectAltNamesPassthrough?: boolean;

  // Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.
  AllowSubjectPassthrough?: boolean;

  // Optional. A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a certificate is signed. To see the full allowed syntax and some examples, see https://cloud.google.com/certificate-authority-service/docs/using-cel
  CelExpression?: CertificateTemplateIdentityConstraintsCelExpression;
}
