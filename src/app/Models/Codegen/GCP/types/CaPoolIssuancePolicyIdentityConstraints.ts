import { CaPoolIssuancePolicyIdentityConstraintsCelExpression } from "./CaPoolIssuancePolicyIdentityConstraintsCelExpression";

export interface CaPoolIssuancePolicyIdentityConstraints {
  /*
If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.
Otherwise, the requested SubjectAltNames will be discarded.
*/
  AllowSubjectAltNamesPassthrough?: boolean;

  /*
If this is set, the Subject field may be copied from a certificate request into the signed certificate.
Otherwise, the requested Subject will be discarded.
*/
  AllowSubjectPassthrough?: boolean;

  /*
A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a
certificate is signed. To see the full allowed syntax and some examples,
see https://cloud.google.com/certificate-authority-service/docs/cel-guide
Structure is documented below.
*/
  CelExpression?: CaPoolIssuancePolicyIdentityConstraintsCelExpression;
}
