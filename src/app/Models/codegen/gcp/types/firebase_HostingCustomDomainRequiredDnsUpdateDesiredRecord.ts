import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord {
  // The domain name the record pertains to, e.g. `foo.bar.com.`.
  domainName?: string;

  /*
The data of the record. The meaning of the value depends on record type:
- A and AAAA: IP addresses for the domain name.
- CNAME: Another domain to check for records.
- TXT: Arbitrary text strings associated with the domain name. Hosting
uses TXT records to determine a which Firebase Projects have
permission to act on the domain name's behalf.
- CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`.
*/
  rdata?: string;

  // Indicates the a required action for this record.
  requiredAction?: string;

  // The record's type, which determines what data the record contains.
  type?: string;
}

export function firebase_HostingCustomDomainRequiredDnsUpdateDesiredRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'requiredAction',
      'Indicates the a required action for this record.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      "The record's type, which determines what data the record contains.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'domainName',
      'The domain name the record pertains to, e.g. `foo.bar.com.`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rdata',
      'The data of the record. The meaning of the value depends on record type:\n- A and AAAA: IP addresses for the domain name.\n- CNAME: Another domain to check for records.\n- TXT: Arbitrary text strings associated with the domain name. Hosting\nuses TXT records to determine a which Firebase Projects have\npermission to act on the domain name\'s behalf.\n- CAA: The record\'s flags, tag, and value, e.g. `0 issue "pki.goog"`.',
      () => [],
      false,
      false,
    ),
  ];
}
