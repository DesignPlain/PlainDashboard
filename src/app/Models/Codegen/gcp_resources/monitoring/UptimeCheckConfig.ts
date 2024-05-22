import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  monitoring_UptimeCheckConfigMonitoredResource,
  monitoring_UptimeCheckConfigMonitoredResource_GetTypes,
} from "../types/monitoring_UptimeCheckConfigMonitoredResource";
import {
  monitoring_UptimeCheckConfigResourceGroup,
  monitoring_UptimeCheckConfigResourceGroup_GetTypes,
} from "../types/monitoring_UptimeCheckConfigResourceGroup";
import {
  monitoring_UptimeCheckConfigSyntheticMonitor,
  monitoring_UptimeCheckConfigSyntheticMonitor_GetTypes,
} from "../types/monitoring_UptimeCheckConfigSyntheticMonitor";
import {
  monitoring_UptimeCheckConfigContentMatcher,
  monitoring_UptimeCheckConfigContentMatcher_GetTypes,
} from "../types/monitoring_UptimeCheckConfigContentMatcher";
import {
  monitoring_UptimeCheckConfigHttpCheck,
  monitoring_UptimeCheckConfigHttpCheck_GetTypes,
} from "../types/monitoring_UptimeCheckConfigHttpCheck";
import {
  monitoring_UptimeCheckConfigTcpCheck,
  monitoring_UptimeCheckConfigTcpCheck_GetTypes,
} from "../types/monitoring_UptimeCheckConfigTcpCheck";

export interface UptimeCheckConfigArgs {
  /*
The checker type to use for the check. If the monitored resource type is `servicedirectory_service`, `checker_type` must be set to `VPC_CHECKERS`.
Possible values are: `STATIC_IP_CHECKERS`, `VPC_CHECKERS`.
*/
  checkerType?: string;

  /*
The [monitored resource]
(https://cloud.google.com/monitoring/api/resources) associated with the
configuration. The following monitored resource types are supported for
uptime checks:
*/
  monitoredResource?: monitoring_UptimeCheckConfigMonitoredResource;

  // How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
  period?: string;

  /*
The group resource associated with the configuration.
Structure is documented below.
*/
  resourceGroup?: monitoring_UptimeCheckConfigResourceGroup;

  /*
A Synthetic Monitor deployed to a Cloud Functions V2 instance.
Structure is documented below.
*/
  syntheticMonitor?: monitoring_UptimeCheckConfigSyntheticMonitor;

  /*
The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted formats


- - -
*/
  timeout?: string;

  // User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects. The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  userLabels?: Map<string, string>;

  /*
The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.
Structure is documented below.
*/
  contentMatchers?: Array<monitoring_UptimeCheckConfigContentMatcher>;

  // A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.
  displayName?: string;

  /*
Contains information needed to make an HTTP or HTTPS check.
Structure is documented below.
*/
  httpCheck?: monitoring_UptimeCheckConfigHttpCheck;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
  selectedRegions?: Array<string>;

  /*
Contains information needed to make a TCP check.
Structure is documented below.
*/
  tcpCheck?: monitoring_UptimeCheckConfigTcpCheck;
}
export class UptimeCheckConfig extends Resource {
  // A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.
  public displayName?: string;

  /*
The [monitored resource]
(https://cloud.google.com/monitoring/api/resources) associated with the
configuration. The following monitored resource types are supported for
uptime checks:
*/
  public monitoredResource?: monitoring_UptimeCheckConfigMonitoredResource;

  // The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
  public selectedRegions?: Array<string>;

  /*
The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted formats


- - -
*/
  public timeout?: string;

  // The id of the uptime check
  public uptimeCheckId?: string;

  // User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects. The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  public userLabels?: Map<string, string>;

  /*
The checker type to use for the check. If the monitored resource type is `servicedirectory_service`, `checker_type` must be set to `VPC_CHECKERS`.
Possible values are: `STATIC_IP_CHECKERS`, `VPC_CHECKERS`.
*/
  public checkerType?: string;

  // The fully qualified name of the cloud function resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Contains information needed to make a TCP check.
Structure is documented below.
*/
  public tcpCheck?: monitoring_UptimeCheckConfigTcpCheck;

  /*
A Synthetic Monitor deployed to a Cloud Functions V2 instance.
Structure is documented below.
*/
  public syntheticMonitor?: monitoring_UptimeCheckConfigSyntheticMonitor;

  /*
The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.
Structure is documented below.
*/
  public contentMatchers?: Array<monitoring_UptimeCheckConfigContentMatcher>;

  /*
Contains information needed to make an HTTP or HTTPS check.
Structure is documented below.
*/
  public httpCheck?: monitoring_UptimeCheckConfigHttpCheck;

  // How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
  public period?: string;

  /*
The group resource associated with the configuration.
Structure is documented below.
*/
  public resourceGroup?: monitoring_UptimeCheckConfigResourceGroup;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "checkerType",
        "The checker type to use for the check. If the monitored resource type is `servicedirectory_service`, `checker_type` must be set to `VPC_CHECKERS`.\nPossible values are: `STATIC_IP_CHECKERS`, `VPC_CHECKERS`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "monitoredResource",
        "The [monitored resource]\n(https://cloud.google.com/monitoring/api/resources) associated with the\nconfiguration. The following monitored resource types are supported for\nuptime checks:",
        monitoring_UptimeCheckConfigMonitoredResource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "resourceGroup",
        "The group resource associated with the configuration.\nStructure is documented below.",
        monitoring_UptimeCheckConfigResourceGroup_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "contentMatchers",
        "The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.\nStructure is documented below.",
        monitoring_UptimeCheckConfigContentMatcher_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "httpCheck",
        "Contains information needed to make an HTTP or HTTPS check.\nStructure is documented below.",
        monitoring_UptimeCheckConfigHttpCheck_GetTypes(),
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
        InputType.Array,
        "selectedRegions",
        "The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tcpCheck",
        "Contains information needed to make a TCP check.\nStructure is documented below.",
        monitoring_UptimeCheckConfigTcpCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "period",
        "How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "syntheticMonitor",
        "A Synthetic Monitor deployed to a Cloud Functions V2 instance.\nStructure is documented below.",
        monitoring_UptimeCheckConfigSyntheticMonitor_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeout",
        "The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted formats\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "userLabels",
        "User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects. The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
