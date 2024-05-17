import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Firebase_HostingCustomDomainCertVerificationDnsDesiredRecord {
  // The domain name the record pertains to, e.g. `foo.bar.com.`.
  DomainName?: string;

  /*
The data of the record. The meaning of the value depends on record type:
- A and AAAA: IP addresses for the domain name.
- CNAME: Another domain to check for records.
- TXT: Arbitrary text strings associated with the domain name. Hosting
uses TXT records to determine a which Firebase Projects have
permission to act on the domain name's behalf.
- CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`.
*/
  Rdata?: string;

  // Indicates the a required action for this record.
  RequiredAction?: string;

  // The record's type, which determines what data the record contains.
  Type?: string;
}

export function Firebase_HostingCustomDomainCertVerificationDnsDesiredRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DomainName",
      "The domain name the record pertains to, e.g. `foo.bar.com.`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Rdata",
      "The data of the record. The meaning of the value depends on record type:\n- A and AAAA: IP addresses for the domain name.\n- CNAME: Another domain to check for records.\n- TXT: Arbitrary text strings associated with the domain name. Hosting\nuses TXT records to determine a which Firebase Projects have\npermission to act on the domain name's behalf.\n- CAA: The record's flags, tag, and value, e.g. `0 issue \"pki.goog\"`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RequiredAction",
      "Indicates the a required action for this record.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The record's type, which determines what data the record contains.",
      [],
      false,
      false,
    ),
  ];
}
