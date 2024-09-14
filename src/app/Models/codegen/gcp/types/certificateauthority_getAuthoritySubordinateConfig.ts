import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_getAuthoritySubordinateConfigPemIssuerChain,
  certificateauthority_getAuthoritySubordinateConfigPemIssuerChain_GetTypes,
} from "./certificateauthority_getAuthoritySubordinateConfigPemIssuerChain";

export interface certificateauthority_getAuthoritySubordinateConfig {
  /*
This can refer to a CertificateAuthority that was used to create a
subordinate CertificateAuthority. This field is used for information
and usability purposes only. The resource name is in the format
'projects/-/locations/-/caPools/-/certificateAuthorities/-'.
*/
  certificateAuthority?: string;

  /*
Contains the PEM certificate chain for the issuers of this CertificateAuthority,
but not pem certificate for this CA itself.
*/
  pemIssuerChains?: Array<certificateauthority_getAuthoritySubordinateConfigPemIssuerChain>;
}

export function certificateauthority_getAuthoritySubordinateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "certificateAuthority",
      "This can refer to a CertificateAuthority that was used to create a\nsubordinate CertificateAuthority. This field is used for information\nand usability purposes only. The resource name is in the format\n'projects/*/locations/*/caPools/*/certificateAuthorities/*'.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pemIssuerChains",
      "Contains the PEM certificate chain for the issuers of this CertificateAuthority,\nbut not pem certificate for this CA itself.",
      () =>
        certificateauthority_getAuthoritySubordinateConfigPemIssuerChain_GetTypes(),
      true,
      false,
    ),
  ];
}
