import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate {
  // The x509 certificate
  x509Certificate?: string;
}

export function identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "x509Certificate",
      "The x509 certificate",
      () => [],
      false,
      false,
    ),
  ];
}
