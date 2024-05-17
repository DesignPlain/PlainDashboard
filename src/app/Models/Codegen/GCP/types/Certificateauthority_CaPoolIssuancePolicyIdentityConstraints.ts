import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression,
  Certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression";

export interface Certificateauthority_CaPoolIssuancePolicyIdentityConstraints {
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
  CelExpression?: Certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression;
}

export function Certificateauthority_CaPoolIssuancePolicyIdentityConstraints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowSubjectAltNamesPassthrough",
      "If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.\nOtherwise, the requested SubjectAltNames will be discarded.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowSubjectPassthrough",
      "If this is set, the Subject field may be copied from a certificate request into the signed certificate.\nOtherwise, the requested Subject will be discarded.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CelExpression",
      "A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a\ncertificate is signed. To see the full allowed syntax and some examples,\nsee https://cloud.google.com/certificate-authority-service/docs/cel-guide\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression_GetTypes(),
      false,
      false,
    ),
  ];
}
