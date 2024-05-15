import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_getAuthorityAccessUrl {
  /*
The URL where this CertificateAuthority's CRLs are published. This will only be set for
CAs that have been activated.
*/
  CrlAccessUrls?: Array<string>;

  /*
The URL where this CertificateAuthority's CA certificate is published. This will only be
set for CAs that have been activated.
*/
  CaCertificateAccessUrl?: string;
}

export function Certificateauthority_getAuthorityAccessUrl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CrlAccessUrls",
      "The URL where this CertificateAuthority's CRLs are published. This will only be set for\nCAs that have been activated.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CaCertificateAccessUrl",
      "The URL where this CertificateAuthority's CA certificate is published. This will only be\nset for CAs that have been activated.",
      [],
      true,
      false,
    ),
  ];
}
