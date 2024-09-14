import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  firebase_HostingCustomDomainCertVerificationDnsDesiredRecord,
  firebase_HostingCustomDomainCertVerificationDnsDesiredRecord_GetTypes,
} from "./firebase_HostingCustomDomainCertVerificationDnsDesiredRecord";

export interface firebase_HostingCustomDomainCertVerificationDnsDesired {
  // The domain name the record pertains to, e.g. `foo.bar.com.`.
  domainName?: string;

  /*
Records on the domain
Structure is documented below.
*/
  records?: Array<firebase_HostingCustomDomainCertVerificationDnsDesiredRecord>;
}

export function firebase_HostingCustomDomainCertVerificationDnsDesired_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "The domain name the record pertains to, e.g. `foo.bar.com.`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "records",
      "Records on the domain\nStructure is documented below.",
      () =>
        firebase_HostingCustomDomainCertVerificationDnsDesiredRecord_GetTypes(),
      false,
      false,
    ),
  ];
}
