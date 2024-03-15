import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceUserMetadata } from "../types/InstanceUserMetadata";
import { InstanceDenyMaintenancePeriod } from "../types/InstanceDenyMaintenancePeriod";
import { InstanceEncryptionConfig } from "../types/InstanceEncryptionConfig";
import { InstanceAdminSettings } from "../types/InstanceAdminSettings";
import { InstanceMaintenanceWindow } from "../types/InstanceMaintenanceWindow";
import { InstanceCustomDomain } from "../types/InstanceCustomDomain";
import { InstanceOauthConfig } from "../types/InstanceOauthConfig";

export interface InstanceArgs {
  /*
Looker instance Admin settings.
Structure is documented below.
*/
  AdminSettings?: InstanceAdminSettings;

  /*
Maintenance window for an instance.
Maintenance of your instance takes place once a month, and will require
your instance to be restarted during updates, which will temporarily
disrupt service.
Structure is documented below.
*/
  MaintenanceWindow?: InstanceMaintenanceWindow;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Whether public IP is enabled on the Looker instance.
  PublicIpEnabled?: boolean;

  // The name of the Looker region of the instance.
  Region?: string;

  /*
Network name in the consumer project in the format of: projects/{project}/global/networks/{network}
Note that the consumer network may be in a different GCP project than the consumer
project that is hosting the Looker Instance.
*/
  ConsumerNetwork?: string;

  /*
Custom domain settings for a Looker instance.
Structure is documented below.
*/
  CustomDomain?: InstanceCustomDomain;

  /*
Looker Instance OAuth login settings.
Structure is documented below.
*/
  OauthConfig?: InstanceOauthConfig;

  /*
Platform editions for a Looker instance. Each edition maps to a set of instance features, like its size. Must be one of these values:
- LOOKER_CORE_TRIAL: trial instance
- LOOKER_CORE_STANDARD: pay as you go standard instance
- LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
- LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
- LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
Default value is `LOOKER_CORE_TRIAL`.
Possible values are: `LOOKER_CORE_TRIAL`, `LOOKER_CORE_STANDARD`, `LOOKER_CORE_STANDARD_ANNUAL`, `LOOKER_CORE_ENTERPRISE_ANNUAL`, `LOOKER_CORE_EMBED_ANNUAL`.
*/
  PlatformEdition?: string;

  /*
Metadata about users for a Looker instance.
These settings are only available when platform edition LOOKER_CORE_STANDARD is set.
There are ten Standard and two Developer users included in the cost of the product.
You can allocate additional Standard, Viewer, and Developer users for this instance.
It is an optional step and can be modified later.
With the Standard edition of Looker (Google Cloud core), you can provision up to 50
total users, distributed across Viewer, Standard, and Developer.
Structure is documented below.
*/
  UserMetadata?: InstanceUserMetadata;

  /*
Maintenance denial period for this instance.
You must allow at least 14 days of maintenance availability
between any two deny maintenance periods.
Structure is documented below.
*/
  DenyMaintenancePeriod?: InstanceDenyMaintenancePeriod;

  /*
Looker instance encryption settings.
Structure is documented below.
*/
  EncryptionConfig?: InstanceEncryptionConfig;

  // Whether private IP is enabled on the Looker instance.
  PrivateIpEnabled?: boolean;

  /*
Name of a reserved IP address range within the consumer network, to be used for
private service access connection. User may or may not specify this in a request.
*/
  ReservedRange?: string;

  /*
The ID of the instance or a fully qualified identifier for the instance.


- - -
*/
  Name?: string;
}
export class Instance extends Resource {
  /*
Looker instance Admin settings.
Structure is documented below.
*/
  public AdminSettings?: InstanceAdminSettings;

  // Public Ingress IP (IPv4).
  public IngressPublicIp?: string;

  // The Looker version that the instance is using.
  public LookerVersion?: string;

  /*
Maintenance window for an instance.
Maintenance of your instance takes place once a month, and will require
your instance to be restarted during updates, which will temporarily
disrupt service.
Structure is documented below.
*/
  public MaintenanceWindow?: InstanceMaintenanceWindow;

  /*
Platform editions for a Looker instance. Each edition maps to a set of instance features, like its size. Must be one of these values:
- LOOKER_CORE_TRIAL: trial instance
- LOOKER_CORE_STANDARD: pay as you go standard instance
- LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
- LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
- LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
Default value is `LOOKER_CORE_TRIAL`.
Possible values are: `LOOKER_CORE_TRIAL`, `LOOKER_CORE_STANDARD`, `LOOKER_CORE_STANDARD_ANNUAL`, `LOOKER_CORE_ENTERPRISE_ANNUAL`, `LOOKER_CORE_EMBED_ANNUAL`.
*/
  public PlatformEdition?: string;

  // Whether public IP is enabled on the Looker instance.
  public PublicIpEnabled?: boolean;

  // The name of the Looker region of the instance.
  public Region?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Network name in the consumer project in the format of: projects/{project}/global/networks/{network}
Note that the consumer network may be in a different GCP project than the consumer
project that is hosting the Looker Instance.
*/
  public ConsumerNetwork?: string;

  /*
The time the instance was created in RFC3339 UTC "Zulu" format,
accurate to nanoseconds.
*/
  public CreateTime?: string;

  // Private Ingress IP (IPv4).
  public IngressPrivateIp?: string;

  // Looker instance URI which can be used to access the Looker Instance UI.
  public LookerUri?: string;

  /*
The ID of the instance or a fully qualified identifier for the instance.


- - -
*/
  public Name?: string;

  /*
Looker Instance OAuth login settings.
Structure is documented below.
*/
  public OauthConfig?: InstanceOauthConfig;

  // Whether private IP is enabled on the Looker instance.
  public PrivateIpEnabled?: boolean;

  /*
Metadata about users for a Looker instance.
These settings are only available when platform edition LOOKER_CORE_STANDARD is set.
There are ten Standard and two Developer users included in the cost of the product.
You can allocate additional Standard, Viewer, and Developer users for this instance.
It is an optional step and can be modified later.
With the Standard edition of Looker (Google Cloud core), you can provision up to 50
total users, distributed across Viewer, Standard, and Developer.
Structure is documented below.
*/
  public UserMetadata?: InstanceUserMetadata;

  /*
Custom domain settings for a Looker instance.
Structure is documented below.
*/
  public CustomDomain?: InstanceCustomDomain;

  /*
Maintenance denial period for this instance.
You must allow at least 14 days of maintenance availability
between any two deny maintenance periods.
Structure is documented below.
*/
  public DenyMaintenancePeriod?: InstanceDenyMaintenancePeriod;

  /*
Looker instance encryption settings.
Structure is documented below.
*/
  public EncryptionConfig?: InstanceEncryptionConfig;

  /*
The time the instance was updated in RFC3339 UTC "Zulu" format,
accurate to nanoseconds.
*/
  public UpdateTime?: string;

  // Public Egress IP (IPv4).
  public EgressPublicIp?: string;

  /*
Name of a reserved IP address range within the consumer network, to be used for
private service access connection. User may or may not specify this in a request.
*/
  public ReservedRange?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The name of the Looker region of the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DenyMaintenancePeriod",
        "Maintenance denial period for this instance.\nYou must allow at least 14 days of maintenance availability\nbetween any two deny maintenance periods.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EncryptionConfig",
        "Looker instance encryption settings.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PlatformEdition",
        "Platform editions for a Looker instance. Each edition maps to a set of instance features, like its size. Must be one of these values:\n- LOOKER_CORE_TRIAL: trial instance\n- LOOKER_CORE_STANDARD: pay as you go standard instance\n- LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance\n- LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance\n- LOOKER_CORE_EMBED_ANNUAL: subscription embed instance\nDefault value is `LOOKER_CORE_TRIAL`.\nPossible values are: `LOOKER_CORE_TRIAL`, `LOOKER_CORE_STANDARD`, `LOOKER_CORE_STANDARD_ANNUAL`, `LOOKER_CORE_ENTERPRISE_ANNUAL`, `LOOKER_CORE_EMBED_ANNUAL`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UserMetadata",
        "Metadata about users for a Looker instance.\nThese settings are only available when platform edition LOOKER_CORE_STANDARD is set.\nThere are ten Standard and two Developer users included in the cost of the product.\nYou can allocate additional Standard, Viewer, and Developer users for this instance.\nIt is an optional step and can be modified later.\nWith the Standard edition of Looker (Google Cloud core), you can provision up to 50\ntotal users, distributed across Viewer, Standard, and Developer.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AdminSettings",
        "Looker instance Admin settings.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConsumerNetwork",
        "Network name in the consumer project in the format of: projects/{project}/global/networks/{network}\nNote that the consumer network may be in a different GCP project than the consumer\nproject that is hosting the Looker Instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReservedRange",
        "Name of a reserved IP address range within the consumer network, to be used for\nprivate service access connection. User may or may not specify this in a request.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the instance or a fully qualified identifier for the instance.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "PrivateIpEnabled",
        "Whether private IP is enabled on the Looker instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenanceWindow",
        "Maintenance window for an instance.\nMaintenance of your instance takes place once a month, and will require\nyour instance to be restarted during updates, which will temporarily\ndisrupt service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "PublicIpEnabled",
        "Whether public IP is enabled on the Looker instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomDomain",
        "Custom domain settings for a Looker instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OauthConfig",
        "Looker Instance OAuth login settings.\nStructure is documented below.",
      ),
    ];
  }
}
