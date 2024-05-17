import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord,
  Firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord_GetTypes,
} from "./Firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord";

export interface Firebase_HostingCustomDomainRequiredDnsUpdateDesired {
  // The domain name the record pertains to, e.g. `foo.bar.com.`.
  DomainName?: string;

  /*
Records on the domain
Structure is documented below.
*/
  Records?: Array<Firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord>;
}

export function Firebase_HostingCustomDomainRequiredDnsUpdateDesired_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Records",
      "Records on the domain\nStructure is documented below.",
      Firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord_GetTypes(),
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
