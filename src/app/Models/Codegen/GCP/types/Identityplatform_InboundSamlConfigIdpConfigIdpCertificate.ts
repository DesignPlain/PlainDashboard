import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_InboundSamlConfigIdpConfigIdpCertificate {
  // The IdP's x509 certificate.
  X509Certificate?: string;
}

export function Identityplatform_InboundSamlConfigIdpConfigIdpCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "X509Certificate",
      "The IdP's x509 certificate.",
      [],
      false,
      false,
    ),
  ];
}
