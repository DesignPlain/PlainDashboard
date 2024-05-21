import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId,
  certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId";

export interface certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan {
  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  critical?: boolean;

  /*
(Output)
Describes how some of the technical fields in a certificate should be populated.
Structure is documented below.
*/
  obectIds?: Array<certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId>;

  // The value of this X.509 extension. A base64-encoded string.
  value?: string;
}

export function certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "critical",
      "Indicates whether or not this extension is critical (i.e., if the client does not know how to\nhandle this extension, the client should consider this to be an error).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "obectIds",
      "(Output)\nDescribes how some of the technical fields in a certificate should be populated.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of this X.509 extension. A base64-encoded string.",
      [],
      false,
      false,
    ),
  ];
}
