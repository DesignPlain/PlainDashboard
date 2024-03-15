import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RegistrationDnsSettings } from "../types/RegistrationDnsSettings";
import { RegistrationYearlyPrice } from "../types/RegistrationYearlyPrice";
import { RegistrationManagementSettings } from "../types/RegistrationManagementSettings";
import { RegistrationContactSettings } from "../types/RegistrationContactSettings";

export interface RegistrationArgs {
  /*
Settings controlling the DNS configuration of the Registration.
Structure is documented below.
*/
  DnsSettings?: RegistrationDnsSettings;

  // Required. The domain name. Unicode domain names must be expressed in Punycode format.
  DomainName?: string;

  /*
Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from
registrations.retrieveRegisterParameters or registrations.searchDomains calls.
Structure is documented below.
*/
  YearlyPrice?: RegistrationYearlyPrice;

  /*
Set of labels associated with the Registration.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location for the resource
  Location?: string;

  /*
Settings for management of the Registration, including renewal, billing, and transfer
Structure is documented below.
*/
  ManagementSettings?: RegistrationManagementSettings;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT
  ContactNotices?: Array<string>;

  /*
Required. Settings for contact information linked to the Registration.
Structure is documented below.
*/
  ContactSettings?: RegistrationContactSettings;

  // The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED
  DomainNotices?: Array<string>;
}
export class Registration extends Resource {
  // Required. The domain name. Unicode domain names must be expressed in Punycode format.
  public DomainName?: string;

  // Output only. Set of options for the contactSettings.privacy field that this Registration supports.
  public SupportedPrivacies?: Array<string>;

  /*
Required. Settings for contact information linked to the Registration.
Structure is documented below.
*/
  public ContactSettings?: RegistrationContactSettings;

  // The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED
  public DomainNotices?: Array<string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Output only. The set of issues with the Registration that require attention.
  public Issues?: Array<string>;

  /*
Set of labels associated with the Registration.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The location for the resource
  public Location?: string;

  /*
Settings for management of the Registration, including renewal, billing, and transfer
Structure is documented below.
*/
  public ManagementSettings?: RegistrationManagementSettings;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT
  public ContactNotices?: Array<string>;

  /*
Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from
registrations.retrieveRegisterParameters or registrations.searchDomains calls.
Structure is documented below.
*/
  public YearlyPrice?: RegistrationYearlyPrice;

  /*
Settings controlling the DNS configuration of the Registration.
Structure is documented below.
*/
  public DnsSettings?: RegistrationDnsSettings;

  // Output only. Time at which the automation was updated.
  public ExpireTime?: string;

  // Output only. Name of the Registration resource, in the format projects/-/locations/-/registrations/<domain_name>.
  public Name?: string;

  // Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state.
  public RegisterFailureReason?: string;

  // Output only. Time at which the automation was created.
  public CreateTime?: string;

  // Output only. The current state of the Registration.
  public State?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ContactSettings",
        "Required. Settings for contact information linked to the Registration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DnsSettings",
        "Settings controlling the DNS configuration of the Registration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DomainName",
        "Required. The domain name. Unicode domain names must be expressed in Punycode format.",
      ),
      new DynamicUIProps(
        InputType.String,
        "YearlyPrice",
        "Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from\nregistrations.retrieveRegisterParameters or registrations.searchDomains calls.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Set of labels associated with the Registration.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ManagementSettings",
        "Settings for management of the Registration, including renewal, billing, and transfer\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ContactNotices",
        "The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "DomainNotices",
        "The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED",
      ),
    ];
  }
}
