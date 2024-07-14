import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddomains_RegistrationDnsSettingsCustomDnsDsRecord,
  clouddomains_RegistrationDnsSettingsCustomDnsDsRecord_GetTypes,
} from "./clouddomains_RegistrationDnsSettingsCustomDnsDsRecord";

export interface clouddomains_RegistrationDnsSettingsCustomDns {
  /*
The list of DS records for this domain, which are used to enable DNSSEC. The domain's DNS provider can provide
the values to set here. If this field is empty, DNSSEC is disabled.
Structure is documented below.
*/
  dsRecords?: Array<clouddomains_RegistrationDnsSettingsCustomDnsDsRecord>;

  /*
Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.
*/
  nameServers?: Array<string>;
}

export function clouddomains_RegistrationDnsSettingsCustomDns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dsRecords",
      "The list of DS records for this domain, which are used to enable DNSSEC. The domain's DNS provider can provide\nthe values to set here. If this field is empty, DNSSEC is disabled.\nStructure is documented below.",
      clouddomains_RegistrationDnsSettingsCustomDnsDsRecord_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nameServers",
      "Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain\nname, with Unicode domain names expressed in Punycode format.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
