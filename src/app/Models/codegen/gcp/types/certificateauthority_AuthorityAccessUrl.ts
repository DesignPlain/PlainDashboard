import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificateauthority_AuthorityAccessUrl {
  /*
(Output)
The URL where this CertificateAuthority's CA certificate is published. This will only be
set for CAs that have been activated.
*/
  caCertificateAccessUrl?: string;

  /*
(Output)
The URL where this CertificateAuthority's CRLs are published. This will only be set for
CAs that have been activated.
*/
  crlAccessUrls?: Array<string>;
}

export function certificateauthority_AuthorityAccessUrl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'caCertificateAccessUrl',
      "(Output)\nThe URL where this CertificateAuthority's CA certificate is published. This will only be\nset for CAs that have been activated.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'crlAccessUrls',
      "(Output)\nThe URL where this CertificateAuthority's CRLs are published. This will only be set for\nCAs that have been activated.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
