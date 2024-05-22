import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2clientvpn_EndpointAuthenticationOption {
  // The ID of the Active Directory to be used for authentication if type is `directory-service-authentication`.
  activeDirectoryId?: string;

  // The ARN of the client certificate. The certificate must be signed by a certificate authority (CA) and it must be provisioned in AWS Certificate Manager (ACM). Only necessary when type is set to `certificate-authentication`.
  rootCertificateChainArn?: string;

  // The ARN of the IAM SAML identity provider if type is `federated-authentication`.
  samlProviderArn?: string;

  // The ARN of the IAM SAML identity provider for the self service portal if type is `federated-authentication`.
  selfServiceSamlProviderArn?: string;

  // The type of client authentication to be used. Specify `certificate-authentication` to use certificate-based authentication, `directory-service-authentication` to use Active Directory authentication, or `federated-authentication` to use Federated Authentication via SAML 2.0.
  type?: string;
}

export function ec2clientvpn_EndpointAuthenticationOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of client authentication to be used. Specify `certificate-authentication` to use certificate-based authentication, `directory-service-authentication` to use Active Directory authentication, or `federated-authentication` to use Federated Authentication via SAML 2.0.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "activeDirectoryId",
      "The ID of the Active Directory to be used for authentication if type is `directory-service-authentication`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "rootCertificateChainArn",
      "The ARN of the client certificate. The certificate must be signed by a certificate authority (CA) and it must be provisioned in AWS Certificate Manager (ACM). Only necessary when type is set to `certificate-authentication`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "samlProviderArn",
      "The ARN of the IAM SAML identity provider if type is `federated-authentication`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "selfServiceSamlProviderArn",
      "The ARN of the IAM SAML identity provider for the self service portal if type is `federated-authentication`.",
      [],
      false,
      true,
    ),
  ];
}
