import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  firebase_HostingCustomDomainCertVerificationDnsDiscoveredRecord,
  firebase_HostingCustomDomainCertVerificationDnsDiscoveredRecord_GetTypes,
} from './firebase_HostingCustomDomainCertVerificationDnsDiscoveredRecord';

export interface firebase_HostingCustomDomainCertVerificationDnsDiscovered {
  // The domain name the record pertains to, e.g. `foo.bar.com.`.
  domainName?: string;

  /*
Records on the domain
Structure is documented below.
*/
  records?: Array<firebase_HostingCustomDomainCertVerificationDnsDiscoveredRecord>;
}

export function firebase_HostingCustomDomainCertVerificationDnsDiscovered_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'records',
      'Records on the domain\nStructure is documented below.',
      () =>
        firebase_HostingCustomDomainCertVerificationDnsDiscoveredRecord_GetTypes(),
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
  ];
}
