import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_SecurityScanConfigAuthentication,
  compute_SecurityScanConfigAuthentication_GetTypes,
} from "../types/compute_SecurityScanConfigAuthentication";
import {
  compute_SecurityScanConfigSchedule,
  compute_SecurityScanConfigSchedule_GetTypes,
} from "../types/compute_SecurityScanConfigSchedule";

export interface SecurityScanConfigArgs {
  /*
Set of Cloud Platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.
Each value may be one of: `APP_ENGINE`, `COMPUTE`.
*/
  targetPlatforms?: Array<string>;

  /*
Type of the user agents used for scanning
Default value is `CHROME_LINUX`.
Possible values are: `USER_AGENT_UNSPECIFIED`, `CHROME_LINUX`, `CHROME_ANDROID`, `SAFARI_IPHONE`.
*/
  userAgent?: string;

  /*
The authentication configuration.
If specified, service will use the authentication configuration during scanning.
Structure is documented below.
*/
  authentication?: compute_SecurityScanConfigAuthentication;

  // The user provider display name of the ScanConfig.
  displayName?: string;

  /*
The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively.
Defaults to 15.
*/
  maxQps?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The starting URLs from which the scanner finds site pages.


- - -
*/
  startingUrls?: Array<string>;

  /*
The blacklist URL patterns as described in
https://cloud.google.com/security-scanner/docs/excluded-urls
*/
  blacklistPatterns?: Array<string>;

  /*
Controls export of scan configurations and results to Cloud Security Command Center.
Default value is `ENABLED`.
Possible values are: `ENABLED`, `DISABLED`.
*/
  exportToSecurityCommandCenter?: string;

  /*
The schedule of the ScanConfig
Structure is documented below.
*/
  schedule?: compute_SecurityScanConfigSchedule;
}
export class SecurityScanConfig extends DS_Resource {
  /*
Controls export of scan configurations and results to Cloud Security Command Center.
Default value is `ENABLED`.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public exportToSecurityCommandCenter?: string;

  /*
A server defined name for this index. Format:
`projects/{{project}}/scanConfigs/{{server_generated_id}}`
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The starting URLs from which the scanner finds site pages.


- - -
*/
  public startingUrls?: Array<string>;

  /*
The authentication configuration.
If specified, service will use the authentication configuration during scanning.
Structure is documented below.
*/
  public authentication?: compute_SecurityScanConfigAuthentication;

  /*
The blacklist URL patterns as described in
https://cloud.google.com/security-scanner/docs/excluded-urls
*/
  public blacklistPatterns?: Array<string>;

  // The user provider display name of the ScanConfig.
  public displayName?: string;

  /*
Type of the user agents used for scanning
Default value is `CHROME_LINUX`.
Possible values are: `USER_AGENT_UNSPECIFIED`, `CHROME_LINUX`, `CHROME_ANDROID`, `SAFARI_IPHONE`.
*/
  public userAgent?: string;

  /*
The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively.
Defaults to 15.
*/
  public maxQps?: number;

  /*
The schedule of the ScanConfig
Structure is documented below.
*/
  public schedule?: compute_SecurityScanConfigSchedule;

  /*
Set of Cloud Platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.
Each value may be one of: `APP_ENGINE`, `COMPUTE`.
*/
  public targetPlatforms?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "targetPlatforms",
        "Set of Cloud Platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.\nEach value may be one of: `APP_ENGINE`, `COMPUTE`.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The user provider display name of the ScanConfig.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "blacklistPatterns",
        "The blacklist URL patterns as described in\nhttps://cloud.google.com/security-scanner/docs/excluded-urls",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userAgent",
        "Type of the user agents used for scanning\nDefault value is `CHROME_LINUX`.\nPossible values are: `USER_AGENT_UNSPECIFIED`, `CHROME_LINUX`, `CHROME_ANDROID`, `SAFARI_IPHONE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "authentication",
        "The authentication configuration.\nIf specified, service will use the authentication configuration during scanning.\nStructure is documented below.",
        () => compute_SecurityScanConfigAuthentication_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxQps",
        "The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively.\nDefaults to 15.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "startingUrls",
        "The starting URLs from which the scanner finds site pages.\n\n\n- - -",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "exportToSecurityCommandCenter",
        "Controls export of scan configurations and results to Cloud Security Command Center.\nDefault value is `ENABLED`.\nPossible values are: `ENABLED`, `DISABLED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "schedule",
        "The schedule of the ScanConfig\nStructure is documented below.",
        () => compute_SecurityScanConfigSchedule_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
