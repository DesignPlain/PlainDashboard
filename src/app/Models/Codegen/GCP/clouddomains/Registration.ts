import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddomains_RegistrationManagementSettings,
  Clouddomains_RegistrationManagementSettings_GetTypes,
} from "../types/Clouddomains_RegistrationManagementSettings";
import {
  Clouddomains_RegistrationContactSettings,
  Clouddomains_RegistrationContactSettings_GetTypes,
} from "../types/Clouddomains_RegistrationContactSettings";
import {
  Clouddomains_RegistrationYearlyPrice,
  Clouddomains_RegistrationYearlyPrice_GetTypes,
} from "../types/Clouddomains_RegistrationYearlyPrice";
import {
  Clouddomains_RegistrationDnsSettings,
  Clouddomains_RegistrationDnsSettings_GetTypes,
} from "../types/Clouddomains_RegistrationDnsSettings";

export interface RegistrationArgs {
  /*
Required. Settings for contact information linked to the Registration.
Structure is documented below.
*/
  ContactSettings?: Clouddomains_RegistrationContactSettings;

  /*
Set of labels associated with the Registration.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location for the resource
  Location?: string;

  /*
Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from
registrations.retrieveRegisterParameters or registrations.searchDomains calls.
Structure is documented below.
*/
  YearlyPrice?: Clouddomains_RegistrationYearlyPrice;

  // The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT
  ContactNotices?: Array<string>;

  /*
Settings controlling the DNS configuration of the Registration.
Structure is documented below.
*/
  DnsSettings?: Clouddomains_RegistrationDnsSettings;

  // Required. The domain name. Unicode domain names must be expressed in Punycode format.
  DomainName?: string;

  // The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED
  DomainNotices?: Array<string>;

  /*
Settings for management of the Registration, including renewal, billing, and transfer
Structure is documented below.
*/
  ManagementSettings?: Clouddomains_RegistrationManagementSettings;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Registration extends Resource {
  /*
Required. Settings for contact information linked to the Registration.
Structure is documented below.
*/
  public ContactSettings?: Clouddomains_RegistrationContactSettings;

  // Required. The domain name. Unicode domain names must be expressed in Punycode format.
  public DomainName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state.
  public RegisterFailureReason?: string;

  // The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT
  public ContactNotices?: Array<string>;

  /*
Settings controlling the DNS configuration of the Registration.
Structure is documented below.
*/
  public DnsSettings?: Clouddomains_RegistrationDnsSettings;

  // The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED
  public DomainNotices?: Array<string>;

  /*
Settings for management of the Registration, including renewal, billing, and transfer
Structure is documented below.
*/
  public ManagementSettings?: Clouddomains_RegistrationManagementSettings;

  // Output only. Set of options for the contactSettings.privacy field that this Registration supports.
  public SupportedPrivacies?: Array<string>;

  // Output only. The set of issues with the Registration that require attention.
  public Issues?: Array<string>;

  // The location for the resource
  public Location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Output only. The current state of the Registration.
  public State?: string;

  /*
Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from
registrations.retrieveRegisterParameters or registrations.searchDomains calls.
Structure is documented below.
*/
  public YearlyPrice?: Clouddomains_RegistrationYearlyPrice;

  // Output only. Time at which the automation was created.
  public CreateTime?: string;

  // Output only. Time at which the automation was updated.
  public ExpireTime?: string;

  /*
Set of labels associated with the Registration.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Output only. Name of the Registration resource, in the format projects/-/locations/-/registrations/<domain_name>.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "ManagementSettings",
        "Settings for management of the Registration, including renewal, billing, and transfer\nStructure is documented below.",
        Clouddomains_RegistrationManagementSettings_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ContactSettings",
        "Required. Settings for contact information linked to the Registration.\nStructure is documented below.",
        Clouddomains_RegistrationContactSettings_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Set of labels associated with the Registration.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "YearlyPrice",
        "Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from\nregistrations.retrieveRegisterParameters or registrations.searchDomains calls.\nStructure is documented below.",
        Clouddomains_RegistrationYearlyPrice_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DnsSettings",
        "Settings controlling the DNS configuration of the Registration.\nStructure is documented below.",
        Clouddomains_RegistrationDnsSettings_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ContactNotices",
        "The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DomainName",
        "Required. The domain name. Unicode domain names must be expressed in Punycode format.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "DomainNotices",
        "The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
