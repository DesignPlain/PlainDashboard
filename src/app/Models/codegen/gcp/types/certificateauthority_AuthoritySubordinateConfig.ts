import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_AuthoritySubordinateConfigPemIssuerChain,
  certificateauthority_AuthoritySubordinateConfigPemIssuerChain_GetTypes,
} from "./certificateauthority_AuthoritySubordinateConfigPemIssuerChain";

export interface certificateauthority_AuthoritySubordinateConfig {
  /*
This can refer to a CertificateAuthority that was used to create a
subordinate CertificateAuthority. This field is used for information
and usability purposes only. The resource name is in the format
`projects/-/locations/-/caPools/-/certificateAuthorities/-`.
*/
  certificateAuthority?: string;

  /*
Contains the PEM certificate chain for the issuers of this CertificateAuthority,
but not pem certificate for this CA itself.
Structure is documented below.
*/
  pemIssuerChain?: certificateauthority_AuthoritySubordinateConfigPemIssuerChain;
}

export function certificateauthority_AuthoritySubordinateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "certificateAuthority",
      "This can refer to a CertificateAuthority that was used to create a\nsubordinate CertificateAuthority. This field is used for information\nand usability purposes only. The resource name is in the format\n`projects/*/locations/*/caPools/*/certificateAuthorities/*`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pemIssuerChain",
      "Contains the PEM certificate chain for the issuers of this CertificateAuthority,\nbut not pem certificate for this CA itself.\nStructure is documented below.",
      () =>
        certificateauthority_AuthoritySubordinateConfigPemIssuerChain_GetTypes(),
      false,
      false,
    ),
  ];
}
