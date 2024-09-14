import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration {
  // Boolean value that specifies whether a custom OCSP responder is enabled.
  enabled?: boolean;

  // A CNAME specifying a customized OCSP domain.
  ocspCustomCname?: string;
}

export function acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration_GetTypes(): DynamicUIProps[] {
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
      "A CNAME specifying a customized OCSP domain.",
      () => [],
      true,
      false,
    ),
  ];
}
