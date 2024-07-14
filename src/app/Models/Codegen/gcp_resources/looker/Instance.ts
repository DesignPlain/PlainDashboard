import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  looker_InstanceDenyMaintenancePeriod,
  looker_InstanceDenyMaintenancePeriod_GetTypes,
} from "../types/looker_InstanceDenyMaintenancePeriod";
import {
  looker_InstanceMaintenanceWindow,
  looker_InstanceMaintenanceWindow_GetTypes,
} from "../types/looker_InstanceMaintenanceWindow";
import {
  looker_InstanceUserMetadata,
  looker_InstanceUserMetadata_GetTypes,
} from "../types/looker_InstanceUserMetadata";
import {
  looker_InstanceEncryptionConfig,
  looker_InstanceEncryptionConfig_GetTypes,
} from "../types/looker_InstanceEncryptionConfig";
import {
  looker_InstanceAdminSettings,
  looker_InstanceAdminSettings_GetTypes,
} from "../types/looker_InstanceAdminSettings";
import {
  looker_InstanceCustomDomain,
  looker_InstanceCustomDomain_GetTypes,
} from "../types/looker_InstanceCustomDomain";
import {
  looker_InstanceOauthConfig,
  looker_InstanceOauthConfig_GetTypes,
} from "../types/looker_InstanceOauthConfig";

export interface InstanceArgs {
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
  userMetadata?: looker_InstanceUserMetadata;

  /*
Network name in the consumer project in the format of: projects/{project}/global/networks/{network}
Note that the consumer network may be in a different GCP project than the consumer
project that is hosting the Looker Instance.
*/
  consumerNetwork?: string;

  /*
Looker instance encryption settings.
Structure is documented below.
*/
  encryptionConfig?: looker_InstanceEncryptionConfig;

  // Whether private IP is enabled on the Looker instance.
  privateIpEnabled?: boolean;

  /*
Name of a reserved IP address range within the consumer network, to be used for
private service access connection. User may or may not specify this in a request.
*/
  reservedRange?: string;

  /*
Looker instance Admin settings.
Structure is documented below.
*/
  adminSettings?: looker_InstanceAdminSettings;

  /*
The ID of the instance or a fully qualified identifier for the instance.


- - -
*/
  name?: string;

  /*
Custom domain settings for a Looker instance.
Structure is documented below.
*/
  customDomain?: looker_InstanceCustomDomain;

  /*
Looker Instance OAuth login settings.
Structure is documented below.
*/
  oauthConfig?: looker_InstanceOauthConfig;

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
  platformEdition?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Whether public IP is enabled on the Looker instance.
  publicIpEnabled?: boolean;

  // The name of the Looker region of the instance.
  region?: string;

  /*
Maintenance denial period for this instance.
You must allow at least 14 days of maintenance availability
between any two deny maintenance periods.
Structure is documented below.
*/
  denyMaintenancePeriod?: looker_InstanceDenyMaintenancePeriod;

  /*
Maintenance window for an instance.
Maintenance of your instance takes place once a month, and will require
your instance to be restarted during updates, which will temporarily
disrupt service.
Structure is documented below.
*/
  maintenanceWindow?: looker_InstanceMaintenanceWindow;
}
export class Instance extends Resource {
  // Looker instance URI which can be used to access the Looker Instance UI.
  public lookerUri?: string;

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
  public platformEdition?: string;

  // Public Ingress IP (IPv4).
  public ingressPublicIp?: string;

  // The name of the Looker region of the instance.
  public region?: string;

  /*
Name of a reserved IP address range within the consumer network, to be used for
private service access connection. User may or may not specify this in a request.
*/
  public reservedRange?: string;

  /*
The ID of the instance or a fully qualified identifier for the instance.


- - -
*/
  public name?: string;

  // Private Ingress IP (IPv4).
  public ingressPrivateIp?: string;

  // The Looker version that the instance is using.
  public lookerVersion?: string;

  /*
Maintenance window for an instance.
Maintenance of your instance takes place once a month, and will require
your instance to be restarted during updates, which will temporarily
disrupt service.
Structure is documented below.
*/
  public maintenanceWindow?: looker_InstanceMaintenanceWindow;

  /*
Looker Instance OAuth login settings.
Structure is documented below.
*/
  public oauthConfig?: looker_InstanceOauthConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Whether public IP is enabled on the Looker instance.
  public publicIpEnabled?: boolean;

  /*
The time the instance was updated in RFC3339 UTC "Zulu" format,
accurate to nanoseconds.
*/
  public updateTime?: string;

  /*
Maintenance denial period for this instance.
You must allow at least 14 days of maintenance availability
between any two deny maintenance periods.
Structure is documented below.
*/
  public denyMaintenancePeriod?: looker_InstanceDenyMaintenancePeriod;

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
  public userMetadata?: looker_InstanceUserMetadata;

  /*
Network name in the consumer project in the format of: projects/{project}/global/networks/{network}
Note that the consumer network may be in a different GCP project than the consumer
project that is hosting the Looker Instance.
*/
  public consumerNetwork?: string;

  /*
The time the instance was created in RFC3339 UTC "Zulu" format,
accurate to nanoseconds.
*/
  public createTime?: string;

  /*
Custom domain settings for a Looker instance.
Structure is documented below.
*/
  public customDomain?: looker_InstanceCustomDomain;

  // Public Egress IP (IPv4).
  public egressPublicIp?: string;

  /*
Looker instance encryption settings.
Structure is documented below.
*/
  public encryptionConfig?: looker_InstanceEncryptionConfig;

  // Whether private IP is enabled on the Looker instance.
  public privateIpEnabled?: boolean;

  /*
Looker instance Admin settings.
Structure is documented below.
*/
  public adminSettings?: looker_InstanceAdminSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "userMetadata",
        "Metadata about users for a Looker instance.\nThese settings are only available when platform edition LOOKER_CORE_STANDARD is set.\nThere are ten Standard and two Developer users included in the cost of the product.\nYou can allocate additional Standard, Viewer, and Developer users for this instance.\nIt is an optional step and can be modified later.\nWith the Standard edition of Looker (Google Cloud core), you can provision up to 50\ntotal users, distributed across Viewer, Standard, and Developer.\nStructure is documented below.",
        looker_InstanceUserMetadata_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfig",
        "Looker instance encryption settings.\nStructure is documented below.",
        looker_InstanceEncryptionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "reservedRange",
        "Name of a reserved IP address range within the consumer network, to be used for\nprivate service access connection. User may or may not specify this in a request.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "oauthConfig",
        "Looker Instance OAuth login settings.\nStructure is documented below.",
        looker_InstanceOauthConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "platformEdition",
        "Platform editions for a Looker instance. Each edition maps to a set of instance features, like its size. Must be one of these values:\n- LOOKER_CORE_TRIAL: trial instance\n- LOOKER_CORE_STANDARD: pay as you go standard instance\n- LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance\n- LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance\n- LOOKER_CORE_EMBED_ANNUAL: subscription embed instance\nDefault value is `LOOKER_CORE_TRIAL`.\nPossible values are: `LOOKER_CORE_TRIAL`, `LOOKER_CORE_STANDARD`, `LOOKER_CORE_STANDARD_ANNUAL`, `LOOKER_CORE_ENTERPRISE_ANNUAL`, `LOOKER_CORE_EMBED_ANNUAL`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "denyMaintenancePeriod",
        "Maintenance denial period for this instance.\nYou must allow at least 14 days of maintenance availability\nbetween any two deny maintenance periods.\nStructure is documented below.",
        looker_InstanceDenyMaintenancePeriod_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "adminSettings",
        "Looker instance Admin settings.\nStructure is documented below.",
        looker_InstanceAdminSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the instance or a fully qualified identifier for the instance.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publicIpEnabled",
        "Whether public IP is enabled on the Looker instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenanceWindow",
        "Maintenance window for an instance.\nMaintenance of your instance takes place once a month, and will require\nyour instance to be restarted during updates, which will temporarily\ndisrupt service.\nStructure is documented below.",
        looker_InstanceMaintenanceWindow_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "consumerNetwork",
        "Network name in the consumer project in the format of: projects/{project}/global/networks/{network}\nNote that the consumer network may be in a different GCP project than the consumer\nproject that is hosting the Looker Instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "privateIpEnabled",
        "Whether private IP is enabled on the Looker instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "customDomain",
        "Custom domain settings for a Looker instance.\nStructure is documented below.",
        looker_InstanceCustomDomain_GetTypes(),
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
        InputType.String,
        "region",
        "The name of the Looker region of the instance.",
        [],
        false,
        true,
      ),
    ];
  }
}
