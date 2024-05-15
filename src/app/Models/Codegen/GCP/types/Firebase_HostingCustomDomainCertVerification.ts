import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_HostingCustomDomainCertVerificationDns,
  Firebase_HostingCustomDomainCertVerificationDns_GetTypes,
} from "./Firebase_HostingCustomDomainCertVerificationDns";
import {
  Firebase_HostingCustomDomainCertVerificationHttp,
  Firebase_HostingCustomDomainCertVerificationHttp_GetTypes,
} from "./Firebase_HostingCustomDomainCertVerificationHttp";

export interface Firebase_HostingCustomDomainCertVerification {
  /*
A `TXT` record to add to your DNS records that confirms your intent to
let Hosting create an SSL cert for your domain name.
Structure is documented below.
*/
  Dns?: Firebase_HostingCustomDomainCertVerificationDns;

  /*
A file to add to your existing, non-Hosting hosting service that confirms
your intent to let Hosting create an SSL cert for your domain name.
Structure is documented below.
*/
  Http?: Firebase_HostingCustomDomainCertVerificationHttp;
}

export function Firebase_HostingCustomDomainCertVerification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Dns",
      "A `TXT` record to add to your DNS records that confirms your intent to\nlet Hosting create an SSL cert for your domain name.\nStructure is documented below.",
      Firebase_HostingCustomDomainCertVerificationDns_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Http",
      "A file to add to your existing, non-Hosting hosting service that confirms\nyour intent to let Hosting create an SSL cert for your domain name.\nStructure is documented below.",
      Firebase_HostingCustomDomainCertVerificationHttp_GetTypes(),
      false,
      false,
    ),
  ];
}
