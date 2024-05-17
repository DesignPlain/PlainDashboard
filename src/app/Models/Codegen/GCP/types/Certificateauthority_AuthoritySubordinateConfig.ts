import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_AuthoritySubordinateConfigPemIssuerChain,
  Certificateauthority_AuthoritySubordinateConfigPemIssuerChain_GetTypes,
} from "./Certificateauthority_AuthoritySubordinateConfigPemIssuerChain";

export interface Certificateauthority_AuthoritySubordinateConfig {
  /*
This can refer to a CertificateAuthority that was used to create a
subordinate CertificateAuthority. This field is used for information
and usability purposes only. The resource name is in the format
`projects/-/locations/-/caPools/-/certificateAuthorities/-`.
*/
  CertificateAuthority?: string;

  /*
Contains the PEM certificate chain for the issuers of this CertificateAuthority,
but not pem certificate for this CA itself.
Structure is documented below.
*/
  PemIssuerChain?: Certificateauthority_AuthoritySubordinateConfigPemIssuerChain;
}

export function Certificateauthority_AuthoritySubordinateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PemIssuerChain",
      "Contains the PEM certificate chain for the issuers of this CertificateAuthority,\nbut not pem certificate for this CA itself.\nStructure is documented below.",
      Certificateauthority_AuthoritySubordinateConfigPemIssuerChain_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CertificateAuthority",
      "This can refer to a CertificateAuthority that was used to create a\nsubordinate CertificateAuthority. This field is used for information\nand usability purposes only. The resource name is in the format\n`projects/*/locations/*/caPools/*/certificateAuthorities/*`.",
      [],
      false,
      false,
    ),
  ];
}
