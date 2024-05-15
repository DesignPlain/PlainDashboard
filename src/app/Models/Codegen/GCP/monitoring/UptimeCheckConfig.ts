import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_UptimeCheckConfigSyntheticMonitor,
  Monitoring_UptimeCheckConfigSyntheticMonitor_GetTypes,
} from "../types/Monitoring_UptimeCheckConfigSyntheticMonitor";
import {
  Monitoring_UptimeCheckConfigContentMatcher,
  Monitoring_UptimeCheckConfigContentMatcher_GetTypes,
} from "../types/Monitoring_UptimeCheckConfigContentMatcher";
import {
  Monitoring_UptimeCheckConfigTcpCheck,
  Monitoring_UptimeCheckConfigTcpCheck_GetTypes,
} from "../types/Monitoring_UptimeCheckConfigTcpCheck";
import {
  Monitoring_UptimeCheckConfigHttpCheck,
  Monitoring_UptimeCheckConfigHttpCheck_GetTypes,
} from "../types/Monitoring_UptimeCheckConfigHttpCheck";
import {
  Monitoring_UptimeCheckConfigMonitoredResource,
  Monitoring_UptimeCheckConfigMonitoredResource_GetTypes,
} from "../types/Monitoring_UptimeCheckConfigMonitoredResource";
import {
  Monitoring_UptimeCheckConfigResourceGroup,
  Monitoring_UptimeCheckConfigResourceGroup_GetTypes,
} from "../types/Monitoring_UptimeCheckConfigResourceGroup";

export interface UptimeCheckConfigArgs {
  // A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.
  DisplayName?: string;

  /*
Contains information needed to make an HTTP or HTTPS check.
Structure is documented below.
*/
  HttpCheck?: Monitoring_UptimeCheckConfigHttpCheck;

  /*
The [monitored resource]
(https://cloud.google.com/monitoring/api/resources) associated with the
configuration. The following monitored resource types are supported for
uptime checks:
*/
  MonitoredResource?: Monitoring_UptimeCheckConfigMonitoredResource;

  // How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
  Period?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The group resource associated with the configuration.
Structure is documented below.
*/
  ResourceGroup?: Monitoring_UptimeCheckConfigResourceGroup;

  /*
A Synthetic Monitor deployed to a Cloud Functions V2 instance.
Structure is documented below.
*/
  SyntheticMonitor?: Monitoring_UptimeCheckConfigSyntheticMonitor;

  /*
The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.
Structure is documented below.
*/
  ContentMatchers?: Array<Monitoring_UptimeCheckConfigContentMatcher>;

  /*
Contains information needed to make a TCP check.
Structure is documented below.
*/
  TcpCheck?: Monitoring_UptimeCheckConfigTcpCheck;

  // The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
  SelectedRegions?: Array<string>;

  /*
The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted formats


- - -
*/
  Timeout?: string;

  // User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects. The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  UserLabels?: Map<string, string>;

  /*
The checker type to use for the check. If the monitored resource type is `servicedirectory_service`, `checker_type` must be set to `VPC_CHECKERS`.
Possible values are: `STATIC_IP_CHECKERS`, `VPC_CHECKERS`.
*/
  CheckerType?: string;
}
export class UptimeCheckConfig extends Resource {
  /*
The checker type to use for the check. If the monitored resource type is `servicedirectory_service`, `checker_type` must be set to `VPC_CHECKERS`.
Possible values are: `STATIC_IP_CHECKERS`, `VPC_CHECKERS`.
*/
  public CheckerType?: string;

  // The fully qualified name of the cloud function resource.
  public Name?: string;

  /*
A Synthetic Monitor deployed to a Cloud Functions V2 instance.
Structure is documented below.
*/
  public SyntheticMonitor?: Monitoring_UptimeCheckConfigSyntheticMonitor;

  /*
Contains information needed to make a TCP check.
Structure is documented below.
*/
  public TcpCheck?: Monitoring_UptimeCheckConfigTcpCheck;

  /*
The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted formats


- - -
*/
  public Timeout?: string;

  // The id of the uptime check
  public UptimeCheckId?: string;

  // User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects. The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  public UserLabels?: Map<string, string>;

  /*
Contains information needed to make an HTTP or HTTPS check.
Structure is documented below.
*/
  public HttpCheck?: Monitoring_UptimeCheckConfigHttpCheck;

  /*
The [monitored resource]
(https://cloud.google.com/monitoring/api/resources) associated with the
configuration. The following monitored resource types are supported for
uptime checks:
*/
  public MonitoredResource?: Monitoring_UptimeCheckConfigMonitoredResource;

  /*
The group resource associated with the configuration.
Structure is documented below.
*/
  public ResourceGroup?: Monitoring_UptimeCheckConfigResourceGroup;

  // How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
  public Period?: string;

  // The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
  public SelectedRegions?: Array<string>;

  /*
The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.
Structure is documented below.
*/
  public ContentMatchers?: Array<Monitoring_UptimeCheckConfigContentMatcher>;

  // A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.
  public DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "SelectedRegions",
        "The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "UserLabels",
        "User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects. The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Period",
        "How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SyntheticMonitor",
        "A Synthetic Monitor deployed to a Cloud Functions V2 instance.\nStructure is documented below.",
        Monitoring_UptimeCheckConfigSyntheticMonitor_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ContentMatchers",
        "The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.\nStructure is documented below.",
        Monitoring_UptimeCheckConfigContentMatcher_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ResourceGroup",
        "The group resource associated with the configuration.\nStructure is documented below.",
        Monitoring_UptimeCheckConfigResourceGroup_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TcpCheck",
        "Contains information needed to make a TCP check.\nStructure is documented below.",
        Monitoring_UptimeCheckConfigTcpCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Timeout",
        "The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted formats\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CheckerType",
        "The checker type to use for the check. If the monitored resource type is `servicedirectory_service`, `checker_type` must be set to `VPC_CHECKERS`.\nPossible values are: `STATIC_IP_CHECKERS`, `VPC_CHECKERS`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "HttpCheck",
        "Contains information needed to make an HTTP or HTTPS check.\nStructure is documented below.",
        Monitoring_UptimeCheckConfigHttpCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MonitoredResource",
        "The [monitored resource]\n(https://cloud.google.com/monitoring/api/resources) associated with the\nconfiguration. The following monitored resource types are supported for\nuptime checks:",
        Monitoring_UptimeCheckConfigMonitoredResource_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
