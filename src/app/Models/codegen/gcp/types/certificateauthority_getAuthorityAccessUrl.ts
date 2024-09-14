import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface certificateauthority_getAuthorityAccessUrl {
  /*
The URL where this CertificateAuthority's CA certificate is published. This will only be
set for CAs that have been activated.
*/
  caCertificateAccessUrl?: string;

  /*
The URL where this CertificateAuthority's CRLs are published. This will only be set for
CAs that have been activated.
*/
  crlAccessUrls?: Array<string>;
}

export function certificateauthority_getAuthorityAccessUrl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "caCertificateAccessUrl",
      "The URL where this CertificateAuthority's CA certificate is published. This will only be\nset for CAs that have been activated.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "crlAccessUrls",
      "The URL where this CertificateAuthority's CRLs are published. This will only be set for\nCAs that have been activated.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
