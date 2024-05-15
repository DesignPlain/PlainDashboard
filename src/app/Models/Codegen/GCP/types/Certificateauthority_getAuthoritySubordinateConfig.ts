import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_getAuthoritySubordinateConfigPemIssuerChain,
  Certificateauthority_getAuthoritySubordinateConfigPemIssuerChain_GetTypes,
} from "./Certificateauthority_getAuthoritySubordinateConfigPemIssuerChain";

export interface Certificateauthority_getAuthoritySubordinateConfig {
  /*
This can refer to a CertificateAuthority that was used to create a
subordinate CertificateAuthority. This field is used for information
and usability purposes only. The resource name is in the format
'projects/-/locations/-/caPools/-/certificateAuthorities/-'.
*/
  CertificateAuthority?: string;

  /*
Contains the PEM certificate chain for the issuers of this CertificateAuthority,
but not pem certificate for this CA itself.
*/
  PemIssuerChains?: Array<Certificateauthority_getAuthoritySubordinateConfigPemIssuerChain>;
}

export function Certificateauthority_getAuthoritySubordinateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CertificateAuthority",
      "This can refer to a CertificateAuthority that was used to create a\nsubordinate CertificateAuthority. This field is used for information\nand usability purposes only. The resource name is in the format\n'projects/*/locations/*/caPools/*/certificateAuthorities/*'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PemIssuerChains",
      "Contains the PEM certificate chain for the issuers of this CertificateAuthority,\nbut not pem certificate for this CA itself.",
      Certificateauthority_getAuthoritySubordinateConfigPemIssuerChain_GetTypes(),
      true,
      false,
    ),
  ];
}
