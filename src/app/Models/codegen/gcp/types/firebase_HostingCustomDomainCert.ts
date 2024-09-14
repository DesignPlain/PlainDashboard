import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  firebase_HostingCustomDomainCertVerification,
  firebase_HostingCustomDomainCertVerification_GetTypes,
} from "./firebase_HostingCustomDomainCertVerification";

export interface firebase_HostingCustomDomainCert {
  /*
The state of the certificate. Only the `CERT_ACTIVE` and
`CERT_EXPIRING_SOON` states provide SSL coverage for a domain name. If the
state is `PROPAGATING` and Hosting had an active cert for the domain name
before, that formerly-active cert provides SSL coverage for the domain name
until the current cert propagates.
*/
  state?: string;

  // The record's type, which determines what data the record contains.
  type?: string;

  /*
A set of ACME challenges you can add to your DNS records or existing,
non-Hosting hosting provider to allow Hosting to create an SSL certificate
for your domain name before you point traffic toward hosting. You can use
thse challenges as part of a zero downtime transition from your old
provider to Hosting.
Structure is documented below.
*/
  verification?: firebase_HostingCustomDomainCertVerification;
}

export function firebase_HostingCustomDomainCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "The state of the certificate. Only the `CERT_ACTIVE` and\n`CERT_EXPIRING_SOON` states provide SSL coverage for a domain name. If the\nstate is `PROPAGATING` and Hosting had an active cert for the domain name\nbefore, that formerly-active cert provides SSL coverage for the domain name\nuntil the current cert propagates.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The record's type, which determines what data the record contains.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "verification",
      "A set of ACME challenges you can add to your DNS records or existing,\nnon-Hosting hosting provider to allow Hosting to create an SSL certificate\nfor your domain name before you point traffic toward hosting. You can use\nthse challenges as part of a zero downtime transition from your old\nprovider to Hosting.\nStructure is documented below.",
      () => firebase_HostingCustomDomainCertVerification_GetTypes(),
      false,
      false,
    ),
  ];
}
