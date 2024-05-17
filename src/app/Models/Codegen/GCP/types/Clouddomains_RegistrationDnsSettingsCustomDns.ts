import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddomains_RegistrationDnsSettingsCustomDnsDsRecord,
  Clouddomains_RegistrationDnsSettingsCustomDnsDsRecord_GetTypes,
} from "./Clouddomains_RegistrationDnsSettingsCustomDnsDsRecord";

export interface Clouddomains_RegistrationDnsSettingsCustomDns {
  /*
The list of DS records for this domain, which are used to enable DNSSEC. The domain's DNS provider can provide
the values to set here. If this field is empty, DNSSEC is disabled.
Structure is documented below.
*/
  DsRecords?: Array<Clouddomains_RegistrationDnsSettingsCustomDnsDsRecord>;

  /*
Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.
*/
  NameServers?: Array<string>;
}

export function Clouddomains_RegistrationDnsSettingsCustomDns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "DsRecords",
      "The list of DS records for this domain, which are used to enable DNSSEC. The domain's DNS provider can provide\nthe values to set here. If this field is empty, DNSSEC is disabled.\nStructure is documented below.",
      Clouddomains_RegistrationDnsSettingsCustomDnsDsRecord_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NameServers",
      "Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain\nname, with Unicode domain names expressed in Punycode format.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
