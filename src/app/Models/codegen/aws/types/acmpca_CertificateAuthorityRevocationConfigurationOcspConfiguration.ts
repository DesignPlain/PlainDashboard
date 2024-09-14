import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface acmpca_CertificateAuthorityRevocationConfigurationOcspConfiguration {
  // Boolean value that specifies whether a custom OCSP responder is enabled.
  enabled?: boolean;

  // CNAME specifying a customized OCSP domain. Note: The value of the CNAME must not include a protocol prefix such as "http://" or "https://".
  ocspCustomCname?: string;
}

export function acmpca_CertificateAuthorityRevocationConfigurationOcspConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Boolean value that specifies whether a custom OCSP responder is enabled.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ocspCustomCname",
      'CNAME specifying a customized OCSP domain. Note: The value of the CNAME must not include a protocol prefix such as "http://" or "https://".',
      () => [],
      false,
      false,
    ),
  ];
}
