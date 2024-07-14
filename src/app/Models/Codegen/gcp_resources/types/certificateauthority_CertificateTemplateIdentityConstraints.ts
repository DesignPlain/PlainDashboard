import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  certificateauthority_CertificateTemplateIdentityConstraintsCelExpression,
  certificateauthority_CertificateTemplateIdentityConstraintsCelExpression_GetTypes,
} from "./certificateauthority_CertificateTemplateIdentityConstraintsCelExpression";

export interface certificateauthority_CertificateTemplateIdentityConstraints {
  // Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.
  allowSubjectPassthrough?: boolean;

  // Optional. A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a certificate is signed. To see the full allowed syntax and some examples, see https://cloud.google.com/certificate-authority-service/docs/using-cel
  celExpression?: certificateauthority_CertificateTemplateIdentityConstraintsCelExpression;

  // Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.
  allowSubjectAltNamesPassthrough?: boolean;
}

export function certificateauthority_CertificateTemplateIdentityConstraints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "celExpression",
      "Optional. A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a certificate is signed. To see the full allowed syntax and some examples, see https://cloud.google.com/certificate-authority-service/docs/using-cel",
      certificateauthority_CertificateTemplateIdentityConstraintsCelExpression_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowSubjectAltNamesPassthrough",
      "Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowSubjectPassthrough",
      "Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.",
      [],
      true,
      false,
    ),
  ];
}
