import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_HostingCustomDomainCertVerification,
  Firebase_HostingCustomDomainCertVerification_GetTypes,
} from "./Firebase_HostingCustomDomainCertVerification";

export interface Firebase_HostingCustomDomainCert {
  /*
The state of the certificate. Only the `CERT_ACTIVE` and
`CERT_EXPIRING_SOON` states provide SSL coverage for a domain name. If the
state is `PROPAGATING` and Hosting had an active cert for the domain name
before, that formerly-active cert provides SSL coverage for the domain name
until the current cert propagates.
*/
  State?: string;

  // The record's type, which determines what data the record contains.
  Type?: string;

  /*
A set of ACME challenges you can add to your DNS records or existing,
non-Hosting hosting provider to allow Hosting to create an SSL certificate
for your domain name before you point traffic toward hosting. You can use
thse challenges as part of a zero downtime transition from your old
provider to Hosting.
Structure is documented below.
*/
  Verification?: Firebase_HostingCustomDomainCertVerification;
}

export function Firebase_HostingCustomDomainCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "The state of the certificate. Only the `CERT_ACTIVE` and\n`CERT_EXPIRING_SOON` states provide SSL coverage for a domain name. If the\nstate is `PROPAGATING` and Hosting had an active cert for the domain name\nbefore, that formerly-active cert provides SSL coverage for the domain name\nuntil the current cert propagates.",
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
    new DynamicUIProps(
      InputType.Object,
      "Verification",
      "A set of ACME challenges you can add to your DNS records or existing,\nnon-Hosting hosting provider to allow Hosting to create an SSL certificate\nfor your domain name before you point traffic toward hosting. You can use\nthse challenges as part of a zero downtime transition from your old\nprovider to Hosting.\nStructure is documented below.",
      Firebase_HostingCustomDomainCertVerification_GetTypes(),
      false,
      false,
    ),
  ];
}
