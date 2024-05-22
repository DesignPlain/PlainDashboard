import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority {
  // The ARN of the `aws.acmpca.CertificateAuthority` used to create the TLS Certificates.
  awsPcaAuthorityArn?: string;
}

export function ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "awsPcaAuthorityArn",
      "The ARN of the `aws.acmpca.CertificateAuthority` used to create the TLS Certificates.",
      [],
      false,
      false,
    ),
  ];
}
