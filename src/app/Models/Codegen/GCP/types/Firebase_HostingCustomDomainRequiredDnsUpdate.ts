import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_HostingCustomDomainRequiredDnsUpdateDesired,
  Firebase_HostingCustomDomainRequiredDnsUpdateDesired_GetTypes,
} from "./Firebase_HostingCustomDomainRequiredDnsUpdateDesired";
import {
  Firebase_HostingCustomDomainRequiredDnsUpdateDiscovered,
  Firebase_HostingCustomDomainRequiredDnsUpdateDiscovered_GetTypes,
} from "./Firebase_HostingCustomDomainRequiredDnsUpdateDiscovered";

export interface Firebase_HostingCustomDomainRequiredDnsUpdate {
  /*
(Output)
The last time Hosting checked your CustomDomain's DNS records.
*/
  CheckTime?: string;

  // A text string to serve at the path.
  Desireds?: Array<Firebase_HostingCustomDomainRequiredDnsUpdateDesired>;

  /*
Whether Hosting was able to find the required file contents on the
specified path during its last check.
*/
  Discovereds?: Array<Firebase_HostingCustomDomainRequiredDnsUpdateDiscovered>;
}

export function Firebase_HostingCustomDomainRequiredDnsUpdate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CheckTime",
      "(Output)\nThe last time Hosting checked your CustomDomain's DNS records.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Desireds",
      "A text string to serve at the path.",
      Firebase_HostingCustomDomainRequiredDnsUpdateDesired_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Discovereds",
      "Whether Hosting was able to find the required file contents on the\nspecified path during its last check.",
      Firebase_HostingCustomDomainRequiredDnsUpdateDiscovered_GetTypes(),
      false,
      false,
    ),
  ];
}
