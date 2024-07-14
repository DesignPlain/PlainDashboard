import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface certificateauthority_CertificateCertificateDescriptionCertFingerprint {
  /*
(Output)
The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate.
*/
  sha256Hash?: string;
}

export function certificateauthority_CertificateCertificateDescriptionCertFingerprint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sha256Hash",
      "(Output)\nThe SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate.",
      [],
      false,
      false,
    ),
  ];
}
