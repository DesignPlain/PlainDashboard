import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  firebase_HostingCustomDomainCertVerificationHttp,
  firebase_HostingCustomDomainCertVerificationHttp_GetTypes,
} from "./firebase_HostingCustomDomainCertVerificationHttp";
import {
  firebase_HostingCustomDomainCertVerificationDns,
  firebase_HostingCustomDomainCertVerificationDns_GetTypes,
} from "./firebase_HostingCustomDomainCertVerificationDns";

export interface firebase_HostingCustomDomainCertVerification {
  /*
A `TXT` record to add to your DNS records that confirms your intent to
let Hosting create an SSL cert for your domain name.
Structure is documented below.
*/
  dns?: firebase_HostingCustomDomainCertVerificationDns;

  /*
A file to add to your existing, non-Hosting hosting service that confirms
your intent to let Hosting create an SSL cert for your domain name.
Structure is documented below.
*/
  http?: firebase_HostingCustomDomainCertVerificationHttp;
}

export function firebase_HostingCustomDomainCertVerification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dns",
      "A `TXT` record to add to your DNS records that confirms your intent to\nlet Hosting create an SSL cert for your domain name.\nStructure is documented below.",
      () => firebase_HostingCustomDomainCertVerificationDns_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "http",
      "A file to add to your existing, non-Hosting hosting service that confirms\nyour intent to let Hosting create an SSL cert for your domain name.\nStructure is documented below.",
      () => firebase_HostingCustomDomainCertVerificationHttp_GetTypes(),
      false,
      false,
    ),
  ];
}
