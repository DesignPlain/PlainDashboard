import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { UptimeCheckConfigTcpCheck } from "../types/UptimeCheckConfigTcpCheck";
import { UptimeCheckConfigMonitoredResource } from "../types/UptimeCheckConfigMonitoredResource";
import { UptimeCheckConfigHttpCheck } from "../types/UptimeCheckConfigHttpCheck";
import { UptimeCheckConfigResourceGroup } from "../types/UptimeCheckConfigResourceGroup";
import { UptimeCheckConfigSyntheticMonitor } from "../types/UptimeCheckConfigSyntheticMonitor";
import { UptimeCheckConfigContentMatcher } from "../types/UptimeCheckConfigContentMatcher";

export interface UptimeCheckConfigArgs {
  // A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.
  DisplayName?: string;

  /*
Contains information needed to make an HTTP or HTTPS check.
Structure is documented below.
*/
  HttpCheck?: UptimeCheckConfigHttpCheck;

  // How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
  Period?: string;

  /*
The group resource associated with the configuration.
Structure is documented below.
*/
  ResourceGroup?: UptimeCheckConfigResourceGroup;

  /*
A Synthetic Monitor deployed to a Cloud Functions V2 instance.
Structure is documented below.
*/
  SyntheticMonitor?: UptimeCheckConfigSyntheticMonitor;

  /*
The checker type to use for the check. If the monitored resource type is `servicedirectory_service`, `checker_type` must be set to `VPC_CHECKERS`.
Possible values are: `STATIC_IP_CHECKERS`, `VPC_CHECKERS`.
*/
  CheckerType?: string;

  /*
The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.
Structure is documented below.
*/
  ContentMatchers?: Array<UptimeCheckConfigContentMatcher>;

  // The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
  SelectedRegions?: Array<string>;

  /*
Contains information needed to make a TCP check.
Structure is documented below.
*/
  TcpCheck?: UptimeCheckConfigTcpCheck;

  /*
The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted formats


- - -
*/
  Timeout?: string;

  // User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects. The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  UserLabels?: Map<string, string>;

  /*
The [monitored resource]
(https://cloud.google.com/monitoring/api/resources) associated with the
configuration. The following monitored resource types are supported for
uptime checks:
*/
  MonitoredResource?: UptimeCheckConfigMonitoredResource;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class UptimeCheckConfig extends Resource {
  /*
A Synthetic Monitor deployed to a Cloud Functions V2 instance.
Structure is documented below.
*/
  public SyntheticMonitor?: UptimeCheckConfigSyntheticMonitor;

  /*
Contains information needed to make a TCP check.
Structure is documented below.
*/
  public TcpCheck?: UptimeCheckConfigTcpCheck;

  /*
The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted formats


- - -
*/
  public Timeout?: string;

  /*
The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.
Structure is documented below.
*/
  public ContentMatchers?: Array<UptimeCheckConfigContentMatcher>;

  /*
Contains information needed to make an HTTP or HTTPS check.
Structure is documented below.
*/
  public HttpCheck?: UptimeCheckConfigHttpCheck;

  /*
The group resource associated with the configuration.
Structure is documented below.
*/
  public ResourceGroup?: UptimeCheckConfigResourceGroup;

  // The id of the uptime check
  public UptimeCheckId?: string;

  // A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.
  public DisplayName?: string;

  // The fully qualified name of the cloud function resource.
  public Name?: string;

  // How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
  public Period?: string;

  // The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
  public SelectedRegions?: Array<string>;

  // User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects. The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  public UserLabels?: Map<string, string>;

  /*
The checker type to use for the check. If the monitored resource type is `servicedirectory_service`, `checker_type` must be set to `VPC_CHECKERS`.
Possible values are: `STATIC_IP_CHECKERS`, `VPC_CHECKERS`.
*/
  public CheckerType?: string;

  /*
The [monitored resource]
(https://cloud.google.com/monitoring/api/resources) associated with the
configuration. The following monitored resource types are supported for
uptime checks:
*/
  public MonitoredResource?: UptimeCheckConfigMonitoredResource;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Period",
        "How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourceGroup",
        "The group resource associated with the configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ContentMatchers",
        "The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SelectedRegions",
        "The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TcpCheck",
        "Contains information needed to make a TCP check.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Timeout",
        "The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted formats\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.",
      ),
      new DynamicUIProps(
        InputType.String,
        "HttpCheck",
        "Contains information needed to make an HTTP or HTTPS check.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SyntheticMonitor",
        "A Synthetic Monitor deployed to a Cloud Functions V2 instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CheckerType",
        "The checker type to use for the check. If the monitored resource type is `servicedirectory_service`, `checker_type` must be set to `VPC_CHECKERS`.\nPossible values are: `STATIC_IP_CHECKERS`, `VPC_CHECKERS`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UserLabels",
        "User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects. The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MonitoredResource",
        "The [monitored resource]\n(https://cloud.google.com/monitoring/api/resources) associated with the\nconfiguration. The following monitored resource types are supported for\nuptime checks:",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
