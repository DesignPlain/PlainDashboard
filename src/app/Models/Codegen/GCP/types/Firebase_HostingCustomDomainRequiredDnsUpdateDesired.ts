import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord,
  firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord_GetTypes,
} from "./firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord";

export interface firebase_HostingCustomDomainRequiredDnsUpdateDesired {
  // The domain name the record pertains to, e.g. `foo.bar.com.`.
  domainName?: string;

  /*
Records on the domain
Structure is documented below.
*/
  records?: Array<firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord>;
}

export function firebase_HostingCustomDomainRequiredDnsUpdateDesired_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "The domain name the record pertains to, e.g. `foo.bar.com.`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "records",
      "Records on the domain\nStructure is documented below.",
      firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord_GetTypes(),
      false,
      false,
    ),
  ];
}
