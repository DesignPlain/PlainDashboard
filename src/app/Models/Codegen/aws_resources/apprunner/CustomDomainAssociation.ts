import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apprunner_CustomDomainAssociationCertificateValidationRecord,
  apprunner_CustomDomainAssociationCertificateValidationRecord_GetTypes,
} from "../types/apprunner_CustomDomainAssociationCertificateValidationRecord";

export interface CustomDomainAssociationArgs {
  // Custom domain endpoint to association. Specify a base domain e.g., `example.com` or a subdomain e.g., `subdomain.example.com`.
  domainName?: string;

  // Whether to associate the subdomain with the App Runner service in addition to the base domain. Defaults to `true`.
  enableWwwSubdomain?: boolean;

  // ARN of the App Runner service.
  serviceArn?: string;
}
export class CustomDomainAssociation extends Resource {
  // App Runner subdomain of the App Runner service. The custom domain name is mapped to this target name. Attribute only available if resource created (not imported) with this provider.
  public dnsTarget?: string;

  // Custom domain endpoint to association. Specify a base domain e.g., `example.com` or a subdomain e.g., `subdomain.example.com`.
  public domainName?: string;

  // Whether to associate the subdomain with the App Runner service in addition to the base domain. Defaults to `true`.
  public enableWwwSubdomain?: boolean;

  // ARN of the App Runner service.
  public serviceArn?: string;

  // Current state of the certificate CNAME record validation. It should change to `SUCCESS` after App Runner completes validation with your DNS.
  public status?: string;

  // A set of certificate CNAME records used for this domain name. See Certificate Validation Records below for more details.
  public certificateValidationRecords?: Array<apprunner_CustomDomainAssociationCertificateValidationRecord>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Custom domain endpoint to association. Specify a base domain e.g., `example.com` or a subdomain e.g., `subdomain.example.com`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableWwwSubdomain",
        "Whether to associate the subdomain with the App Runner service in addition to the base domain. Defaults to `true`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceArn",
        "ARN of the App Runner service.",
        [],
        true,
        true,
      ),
    ];
  }
}
