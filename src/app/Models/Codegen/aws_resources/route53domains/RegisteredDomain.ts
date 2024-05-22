import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  route53domains_RegisteredDomainRegistrantContact,
  route53domains_RegisteredDomainRegistrantContact_GetTypes,
} from "../types/route53domains_RegisteredDomainRegistrantContact";
import {
  route53domains_RegisteredDomainTechContact,
  route53domains_RegisteredDomainTechContact_GetTypes,
} from "../types/route53domains_RegisteredDomainTechContact";
import {
  route53domains_RegisteredDomainNameServer,
  route53domains_RegisteredDomainNameServer_GetTypes,
} from "../types/route53domains_RegisteredDomainNameServer";
import {
  route53domains_RegisteredDomainAdminContact,
  route53domains_RegisteredDomainAdminContact_GetTypes,
} from "../types/route53domains_RegisteredDomainAdminContact";

export interface RegisteredDomainArgs {
  // Details about the domain registrant. See Contact Blocks for more details.
  registrantContact?: route53domains_RegisteredDomainRegistrantContact;

  // Details about the domain technical contact. See Contact Blocks for more details.
  techContact?: route53domains_RegisteredDomainTechContact;

  // Whether domain technical contact information is concealed from WHOIS queries. Default: `true`.
  techPrivacy?: boolean;

  // Whether domain administrative contact information is concealed from WHOIS queries. Default: `true`.
  adminPrivacy?: boolean;

  // Whether the domain registration is set to renew automatically. Default: `true`.
  autoRenew?: boolean;

  // The list of nameservers for the domain. See `name_server` Blocks for more details.
  nameServers?: Array<route53domains_RegisteredDomainNameServer>;

  // Whether domain registrant contact information is concealed from WHOIS queries. Default: `true`.
  registrantPrivacy?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Whether the domain is locked for transfer. Default: `true`.
  transferLock?: boolean;

  // Details about the domain administrative contact. See Contact Blocks for more details.
  adminContact?: route53domains_RegisteredDomainAdminContact;

  // The name of the registered domain.
  domainName?: string;
}
export class RegisteredDomain extends Resource {
  // Details about the domain administrative contact. See Contact Blocks for more details.
  public adminContact?: route53domains_RegisteredDomainAdminContact;

  // The list of nameservers for the domain. See `name_server` Blocks for more details.
  public nameServers?: Array<route53domains_RegisteredDomainNameServer>;

  // Details about the domain registrant. See Contact Blocks for more details.
  public registrantContact?: route53domains_RegisteredDomainRegistrantContact;

  // Whether the domain is locked for transfer. Default: `true`.
  public transferLock?: boolean;

  // The last updated date of the domain as found in the response to a WHOIS query.
  public updatedDate?: string;

  // The fully qualified name of the WHOIS server that can answer the WHOIS query for the domain.
  public whoisServer?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Phone number for reporting abuse.
  public abuseContactPhone?: string;

  // Whether the domain registration is set to renew automatically. Default: `true`.
  public autoRenew?: boolean;

  // The date when the domain was created as found in the response to a WHOIS query.
  public creationDate?: string;

  // The date when the registration for the domain is set to expire.
  public expirationDate?: string;

  // Web address of the registrar.
  public registrarUrl?: string;

  // Reseller of the domain.
  public reseller?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Email address to contact to report incorrect contact information for a domain, to report that the domain is being used to send spam, to report that someone is cybersquatting on a domain name, or report some other type of abuse.
  public abuseContactEmail?: string;

  // Whether domain administrative contact information is concealed from WHOIS queries. Default: `true`.
  public adminPrivacy?: boolean;

  // The name of the registered domain.
  public domainName?: string;

  // Whether domain registrant contact information is concealed from WHOIS queries. Default: `true`.
  public registrantPrivacy?: boolean;

  // Name of the registrar of the domain as identified in the registry.
  public registrarName?: string;

  // List of [domain name status codes](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en).
  public statusLists?: Array<string>;

  // Details about the domain technical contact. See Contact Blocks for more details.
  public techContact?: route53domains_RegisteredDomainTechContact;

  // Whether domain technical contact information is concealed from WHOIS queries. Default: `true`.
  public techPrivacy?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "registrantContact",
        "Details about the domain registrant. See Contact Blocks for more details.",
        route53domains_RegisteredDomainRegistrantContact_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "techContact",
        "Details about the domain technical contact. See Contact Blocks for more details.",
        route53domains_RegisteredDomainTechContact_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoRenew",
        "Whether the domain registration is set to renew automatically. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "registrantPrivacy",
        "Whether domain registrant contact information is concealed from WHOIS queries. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "adminContact",
        "Details about the domain administrative contact. See Contact Blocks for more details.",
        route53domains_RegisteredDomainAdminContact_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "techPrivacy",
        "Whether domain technical contact information is concealed from WHOIS queries. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "adminPrivacy",
        "Whether domain administrative contact information is concealed from WHOIS queries. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "nameServers",
        "The list of nameservers for the domain. See `name_server` Blocks for more details.",
        route53domains_RegisteredDomainNameServer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "transferLock",
        "Whether the domain is locked for transfer. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The name of the registered domain.",
        [],
        true,
        false,
      ),
    ];
  }
}
