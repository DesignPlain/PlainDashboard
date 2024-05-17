import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId,
  Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId";

export interface Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan {
  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  Critical?: boolean;

  /*
(Output)
Describes how some of the technical fields in a certificate should be populated.
Structure is documented below.
*/
  ObectIds?: Array<Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId>;

  // The value of this X.509 extension. A base64-encoded string.
  Value?: string;
}

export function Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Critical",
      "Indicates whether or not this extension is critical (i.e., if the client does not know how to\nhandle this extension, the client should consider this to be an error).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ObectIds",
      "(Output)\nDescribes how some of the technical fields in a certificate should be populated.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The value of this X.509 extension. A base64-encoded string.",
      [],
      false,
      false,
    ),
  ];
}
