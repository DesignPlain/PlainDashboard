import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression,
  certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression";

export interface certificateauthority_CaPoolIssuancePolicyIdentityConstraints {
  /*
If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.
Otherwise, the requested SubjectAltNames will be discarded.
*/
  allowSubjectAltNamesPassthrough?: boolean;

  /*
If this is set, the Subject field may be copied from a certificate request into the signed certificate.
Otherwise, the requested Subject will be discarded.
*/
  allowSubjectPassthrough?: boolean;

  /*
A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a
certificate is signed. To see the full allowed syntax and some examples,
see https://cloud.google.com/certificate-authority-service/docs/cel-guide
Structure is documented below.
*/
  celExpression?: certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression;
}

export function certificateauthority_CaPoolIssuancePolicyIdentityConstraints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowSubjectAltNamesPassthrough",
      "If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.\nOtherwise, the requested SubjectAltNames will be discarded.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowSubjectPassthrough",
      "If this is set, the Subject field may be copied from a certificate request into the signed certificate.\nOtherwise, the requested Subject will be discarded.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "celExpression",
      "A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a\ncertificate is signed. To see the full allowed syntax and some examples,\nsee https://cloud.google.com/certificate-authority-service/docs/cel-guide\nStructure is documented below.",
      () =>
        certificateauthority_CaPoolIssuancePolicyIdentityConstraintsCelExpression_GetTypes(),
      false,
      false,
    ),
  ];
}
