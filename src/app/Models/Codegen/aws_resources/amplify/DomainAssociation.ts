import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  amplify_DomainAssociationSubDomain,
  amplify_DomainAssociationSubDomain_GetTypes,
} from "../types/amplify_DomainAssociationSubDomain";

export interface DomainAssociationArgs {
  // Unique ID for an Amplify app.
  appId?: string;

  // Domain name for the domain association.
  domainName?: string;

  // Enables the automated creation of subdomains for branches.
  enableAutoSubDomain?: boolean;

  // Setting for the subdomain. Documented below.
  subDomains?: Array<amplify_DomainAssociationSubDomain>;

  // If enabled, the resource will wait for the domain association status to change to `PENDING_DEPLOYMENT` or `AVAILABLE`. Setting this to `false` will skip the process. Default: `true`.
  waitForVerification?: boolean;
}
export class DomainAssociation extends Resource {
  // If enabled, the resource will wait for the domain association status to change to `PENDING_DEPLOYMENT` or `AVAILABLE`. Setting this to `false` will skip the process. Default: `true`.
  public waitForVerification?: boolean;

  // Unique ID for an Amplify app.
  public appId?: string;

  // ARN for the domain association.
  public arn?: string;

  // The DNS record for certificate verification.
  public certificateVerificationDnsRecord?: string;

  // Domain name for the domain association.
  public domainName?: string;

  // Enables the automated creation of subdomains for branches.
  public enableAutoSubDomain?: boolean;

  // Setting for the subdomain. Documented below.
  public subDomains?: Array<amplify_DomainAssociationSubDomain>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "appId",
        "Unique ID for an Amplify app.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Domain name for the domain association.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableAutoSubDomain",
        "Enables the automated creation of subdomains for branches.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subDomains",
        "Setting for the subdomain. Documented below.",
        amplify_DomainAssociationSubDomain_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "waitForVerification",
        "If enabled, the resource will wait for the domain association status to change to `PENDING_DEPLOYMENT` or `AVAILABLE`. Setting this to `false` will skip the process. Default: `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
