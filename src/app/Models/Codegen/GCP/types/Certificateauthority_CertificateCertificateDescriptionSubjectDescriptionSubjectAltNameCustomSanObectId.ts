import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId {
  // An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  ObjectIdPaths?: Array<number>;
}

export function Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ObjectIdPaths",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
  ];
}
