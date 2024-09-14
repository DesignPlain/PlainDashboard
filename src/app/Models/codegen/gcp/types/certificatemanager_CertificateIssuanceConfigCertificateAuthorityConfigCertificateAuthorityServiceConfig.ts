import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig {
  /*
A CA pool resource used to issue a certificate.
The CA pool string has a relative resource path following the form
"projects/{project}/locations/{location}/caPools/{caPool}".

- - -
*/
  caPool?: string;
}

export function certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "caPool",
      'A CA pool resource used to issue a certificate.\nThe CA pool string has a relative resource path following the form\n"projects/{project}/locations/{location}/caPools/{caPool}".\n\n- - -',
      () => [],
      true,
      true,
    ),
  ];
}
