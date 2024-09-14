import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface certificateauthority_CaPoolPublishingOptions {
  /*
When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension
in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not
be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are
also rebuilt shortly after a certificate is revoked.
*/
  publishCrl?: boolean;

  /*
Specifies the encoding format of each CertificateAuthority's CA
certificate and CRLs. If this is omitted, CA certificates and CRLs
will be published in PEM.
Possible values are: `PEM`, `DER`.
*/
  encodingFormat?: string;

  /*
When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access"
X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding
X.509 extension will not be written in issued certificates.
*/
  publishCaCert?: boolean;
}

export function certificateauthority_CaPoolPublishingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "publishCaCert",
      'When true, publishes each CertificateAuthority\'s CA certificate and includes its URL in the "Authority Information Access"\nX.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding\nX.509 extension will not be written in issued certificates.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "publishCrl",
      'When true, publishes each CertificateAuthority\'s CRL and includes its URL in the "CRL Distribution Points" X.509 extension\nin all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not\nbe written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are\nalso rebuilt shortly after a certificate is revoked.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encodingFormat",
      "Specifies the encoding format of each CertificateAuthority's CA\ncertificate and CRLs. If this is omitted, CA certificates and CRLs\nwill be published in PEM.\nPossible values are: `PEM`, `DER`.",
      () => [],
      false,
      false,
    ),
  ];
}
