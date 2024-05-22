import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface identityplatform_InboundSamlConfigIdpConfigIdpCertificate {
  // The IdP's x509 certificate.
  x509Certificate?: string;
}

export function identityplatform_InboundSamlConfigIdpConfigIdpCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "x509Certificate",
      "The IdP's x509 certificate.",
      [],
      false,
      false,
    ),
  ];
}
