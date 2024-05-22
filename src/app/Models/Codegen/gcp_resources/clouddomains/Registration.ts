import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddomains_RegistrationManagementSettings,
  clouddomains_RegistrationManagementSettings_GetTypes,
} from "../types/clouddomains_RegistrationManagementSettings";
import {
  clouddomains_RegistrationContactSettings,
  clouddomains_RegistrationContactSettings_GetTypes,
} from "../types/clouddomains_RegistrationContactSettings";
import {
  clouddomains_RegistrationYearlyPrice,
  clouddomains_RegistrationYearlyPrice_GetTypes,
} from "../types/clouddomains_RegistrationYearlyPrice";
import {
  clouddomains_RegistrationDnsSettings,
  clouddomains_RegistrationDnsSettings_GetTypes,
} from "../types/clouddomains_RegistrationDnsSettings";

export interface RegistrationArgs {
  // The location for the resource
  location?: string;

  /*
Settings for management of the Registration, including renewal, billing, and transfer
Structure is documented below.
*/
  managementSettings?: clouddomains_RegistrationManagementSettings;

  /*
Required. Settings for contact information linked to the Registration.
Structure is documented below.
*/
  contactSettings?: clouddomains_RegistrationContactSettings;

  // Required. The domain name. Unicode domain names must be expressed in Punycode format.
  domainName?: string;

  /*
Set of labels associated with the Registration.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from
registrations.retrieveRegisterParameters or registrations.searchDomains calls.
Structure is documented below.
*/
  yearlyPrice?: clouddomains_RegistrationYearlyPrice;

  // The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT
  contactNotices?: Array<string>;

  /*
Settings controlling the DNS configuration of the Registration.
Structure is documented below.
*/
  dnsSettings?: clouddomains_RegistrationDnsSettings;

  // The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED
  domainNotices?: Array<string>;
}
export class Registration extends Resource {
  /*
Set of labels associated with the Registration.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state.
  public registerFailureReason?: string;

  // Output only. The current state of the Registration.
  public state?: string;

  /*
Settings controlling the DNS configuration of the Registration.
Structure is documented below.
*/
  public dnsSettings?: clouddomains_RegistrationDnsSettings;

  // Required. The domain name. Unicode domain names must be expressed in Punycode format.
  public domainName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Output only. Time at which the automation was created.
  public createTime?: string;

  // The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED
  public domainNotices?: Array<string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Output only. Time at which the automation was updated.
  public expireTime?: string;

  // The location for the resource
  public location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Required. Settings for contact information linked to the Registration.
Structure is documented below.
*/
  public contactSettings?: clouddomains_RegistrationContactSettings;

  // Output only. The set of issues with the Registration that require attention.
  public issues?: Array<string>;

  /*
Settings for management of the Registration, including renewal, billing, and transfer
Structure is documented below.
*/
  public managementSettings?: clouddomains_RegistrationManagementSettings;

  // Output only. Name of the Registration resource, in the format projects/-/locations/-/registrations/<domain_name>.
  public name?: string;

  // Output only. Set of options for the contactSettings.privacy field that this Registration supports.
  public supportedPrivacies?: Array<string>;

  /*
Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from
registrations.retrieveRegisterParameters or registrations.searchDomains calls.
Structure is documented below.
*/
  public yearlyPrice?: clouddomains_RegistrationYearlyPrice;

  // The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT
  public contactNotices?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "domainNotices",
        "The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "contactSettings",
        "Required. Settings for contact information linked to the Registration.\nStructure is documented below.",
        clouddomains_RegistrationContactSettings_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Required. The domain name. Unicode domain names must be expressed in Punycode format.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of labels associated with the Registration.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "yearlyPrice",
        "Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from\nregistrations.retrieveRegisterParameters or registrations.searchDomains calls.\nStructure is documented below.",
        clouddomains_RegistrationYearlyPrice_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "contactNotices",
        "The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dnsSettings",
        "Settings controlling the DNS configuration of the Registration.\nStructure is documented below.",
        clouddomains_RegistrationDnsSettings_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "managementSettings",
        "Settings for management of the Registration, including renewal, billing, and transfer\nStructure is documented below.",
        clouddomains_RegistrationManagementSettings_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
