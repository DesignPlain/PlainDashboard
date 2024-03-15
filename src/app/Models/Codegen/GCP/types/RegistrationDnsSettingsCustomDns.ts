import { RegistrationDnsSettingsCustomDnsDsRecord } from "./RegistrationDnsSettingsCustomDnsDsRecord";

export interface RegistrationDnsSettingsCustomDns {
  /*
The list of DS records for this domain, which are used to enable DNSSEC. The domain's DNS provider can provide
the values to set here. If this field is empty, DNSSEC is disabled.
Structure is documented below.
*/
  DsRecords?: Array<RegistrationDnsSettingsCustomDnsDsRecord>;

  /*
Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.
*/
  NameServers?: Array<string>;
}
