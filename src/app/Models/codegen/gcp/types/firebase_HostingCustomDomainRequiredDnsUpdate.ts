import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  firebase_HostingCustomDomainRequiredDnsUpdateDesired,
  firebase_HostingCustomDomainRequiredDnsUpdateDesired_GetTypes,
} from "./firebase_HostingCustomDomainRequiredDnsUpdateDesired";
import {
  firebase_HostingCustomDomainRequiredDnsUpdateDiscovered,
  firebase_HostingCustomDomainRequiredDnsUpdateDiscovered_GetTypes,
} from "./firebase_HostingCustomDomainRequiredDnsUpdateDiscovered";

export interface firebase_HostingCustomDomainRequiredDnsUpdate {
  /*
(Output)
The last time Hosting checked your CustomDomain's DNS records.
*/
  checkTime?: string;

  // A text string to serve at the path.
  desireds?: Array<firebase_HostingCustomDomainRequiredDnsUpdateDesired>;

  /*
Whether Hosting was able to find the required file contents on the
specified path during its last check.
*/
  discovereds?: Array<firebase_HostingCustomDomainRequiredDnsUpdateDiscovered>;
}

export function firebase_HostingCustomDomainRequiredDnsUpdate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "desireds",
      "A text string to serve at the path.",
      () => firebase_HostingCustomDomainRequiredDnsUpdateDesired_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "discovereds",
      "Whether Hosting was able to find the required file contents on the\nspecified path during its last check.",
      () => firebase_HostingCustomDomainRequiredDnsUpdateDiscovered_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "checkTime",
      "(Output)\nThe last time Hosting checked your CustomDomain's DNS records.",
      () => [],
      false,
      false,
    ),
  ];
}
