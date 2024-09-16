import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  firebase_HostingCustomDomainCertVerificationDnsDesired,
  firebase_HostingCustomDomainCertVerificationDnsDesired_GetTypes,
} from './firebase_HostingCustomDomainCertVerificationDnsDesired';
import {
  firebase_HostingCustomDomainCertVerificationDnsDiscovered,
  firebase_HostingCustomDomainCertVerificationDnsDiscovered_GetTypes,
} from './firebase_HostingCustomDomainCertVerificationDnsDiscovered';

export interface firebase_HostingCustomDomainCertVerificationDns {
  /*
(Output)
The last time Hosting checked your CustomDomain's DNS records.
*/
  checkTime?: string;

  // A text string to serve at the path.
  desireds?: Array<firebase_HostingCustomDomainCertVerificationDnsDesired>;

  /*
Whether Hosting was able to find the required file contents on the
specified path during its last check.
*/
  discovereds?: Array<firebase_HostingCustomDomainCertVerificationDnsDiscovered>;
}

export function firebase_HostingCustomDomainCertVerificationDns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'checkTime',
      "(Output)\nThe last time Hosting checked your CustomDomain's DNS records.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'desireds',
      'A text string to serve at the path.',
      () => firebase_HostingCustomDomainCertVerificationDnsDesired_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'discovereds',
      'Whether Hosting was able to find the required file contents on the\nspecified path during its last check.',
      () =>
        firebase_HostingCustomDomainCertVerificationDnsDiscovered_GetTypes(),
      false,
      false,
    ),
  ];
}
