import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_CertificateCertificateDescriptionCertFingerprint {
  /*
(Output)
The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate.
*/
  Sha256Hash?: string;
}

export function Certificateauthority_CertificateCertificateDescriptionCertFingerprint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Sha256Hash",
      "(Output)\nThe SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate.",
      [],
      false,
      false,
    ),
  ];
}
