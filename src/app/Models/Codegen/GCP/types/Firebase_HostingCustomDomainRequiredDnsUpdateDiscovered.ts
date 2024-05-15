import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_HostingCustomDomainRequiredDnsUpdateDiscoveredRecord,
  Firebase_HostingCustomDomainRequiredDnsUpdateDiscoveredRecord_GetTypes,
} from "./Firebase_HostingCustomDomainRequiredDnsUpdateDiscoveredRecord";

export interface Firebase_HostingCustomDomainRequiredDnsUpdateDiscovered {
  // The domain name the record pertains to, e.g. `foo.bar.com.`.
  DomainName?: string;

  /*
Records on the domain
Structure is documented below.
*/
  Records?: Array<Firebase_HostingCustomDomainRequiredDnsUpdateDiscoveredRecord>;
}

export function Firebase_HostingCustomDomainRequiredDnsUpdateDiscovered_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Records",
      "Records on the domain\nStructure is documented below.",
      Firebase_HostingCustomDomainRequiredDnsUpdateDiscoveredRecord_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DomainName",
      "The domain name the record pertains to, e.g. `foo.bar.com.`.",
      [],
      false,
      false,
    ),
  ];
}
