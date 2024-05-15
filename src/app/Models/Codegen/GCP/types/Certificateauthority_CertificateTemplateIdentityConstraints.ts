import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateTemplateIdentityConstraintsCelExpression,
  Certificateauthority_CertificateTemplateIdentityConstraintsCelExpression_GetTypes,
} from "./Certificateauthority_CertificateTemplateIdentityConstraintsCelExpression";

export interface Certificateauthority_CertificateTemplateIdentityConstraints {
  // Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.
  AllowSubjectPassthrough?: boolean;

  // Optional. A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a certificate is signed. To see the full allowed syntax and some examples, see https://cloud.google.com/certificate-authority-service/docs/using-cel
  CelExpression?: Certificateauthority_CertificateTemplateIdentityConstraintsCelExpression;

  // Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.
  AllowSubjectAltNamesPassthrough?: boolean;
}

export function Certificateauthority_CertificateTemplateIdentityConstraints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowSubjectPassthrough",
      "Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CelExpression",
      "Optional. A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a certificate is signed. To see the full allowed syntax and some examples, see https://cloud.google.com/certificate-authority-service/docs/using-cel",
      Certificateauthority_CertificateTemplateIdentityConstraintsCelExpression_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowSubjectAltNamesPassthrough",
      "Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.",
      [],
      true,
      false,
    ),
  ];
}
