import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityScanConfigSchedule,
  Compute_SecurityScanConfigSchedule_GetTypes,
} from "../types/Compute_SecurityScanConfigSchedule";
import {
  Compute_SecurityScanConfigAuthentication,
  Compute_SecurityScanConfigAuthentication_GetTypes,
} from "../types/Compute_SecurityScanConfigAuthentication";

export interface SecurityScanConfigArgs {
  /*
Set of Cloud Platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.
Each value may be one of: `APP_ENGINE`, `COMPUTE`.
*/
  TargetPlatforms?: Array<string>;

  /*
Type of the user agents used for scanning
Default value is `CHROME_LINUX`.
Possible values are: `USER_AGENT_UNSPECIFIED`, `CHROME_LINUX`, `CHROME_ANDROID`, `SAFARI_IPHONE`.
*/
  UserAgent?: string;

  /*
The blacklist URL patterns as described in
https://cloud.google.com/security-scanner/docs/excluded-urls
*/
  BlacklistPatterns?: Array<string>;

  /*
Controls export of scan configurations and results to Cloud Security Command Center.
Default value is `ENABLED`.
Possible values are: `ENABLED`, `DISABLED`.
*/
  ExportToSecurityCommandCenter?: string;

  /*
The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively.
Defaults to 15.
*/
  MaxQps?: number;

  /*
The schedule of the ScanConfig
Structure is documented below.
*/
  Schedule?: Compute_SecurityScanConfigSchedule;

  /*
The authentication configuration.
If specified, service will use the authentication configuration during scanning.
Structure is documented below.
*/
  Authentication?: Compute_SecurityScanConfigAuthentication;

  // The user provider display name of the ScanConfig.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The starting URLs from which the scanner finds site pages.


- - -
*/
  StartingUrls?: Array<string>;
}
export class SecurityScanConfig extends Resource {
  /*
The authentication configuration.
If specified, service will use the authentication configuration during scanning.
Structure is documented below.
*/
  public Authentication?: Compute_SecurityScanConfigAuthentication;

  /*
The blacklist URL patterns as described in
https://cloud.google.com/security-scanner/docs/excluded-urls
*/
  public BlacklistPatterns?: Array<string>;

  // The user provider display name of the ScanConfig.
  public DisplayName?: string;

  /*
The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively.
Defaults to 15.
*/
  public MaxQps?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Set of Cloud Platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.
Each value may be one of: `APP_ENGINE`, `COMPUTE`.
*/
  public TargetPlatforms?: Array<string>;

  /*
Controls export of scan configurations and results to Cloud Security Command Center.
Default value is `ENABLED`.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public ExportToSecurityCommandCenter?: string;

  /*
A server defined name for this index. Format:
`projects/{{project}}/scanConfigs/{{server_generated_id}}`
*/
  public Name?: string;

  /*
The schedule of the ScanConfig
Structure is documented below.
*/
  public Schedule?: Compute_SecurityScanConfigSchedule;

  /*
The starting URLs from which the scanner finds site pages.


- - -
*/
  public StartingUrls?: Array<string>;

  /*
Type of the user agents used for scanning
Default value is `CHROME_LINUX`.
Possible values are: `USER_AGENT_UNSPECIFIED`, `CHROME_LINUX`, `CHROME_ANDROID`, `SAFARI_IPHONE`.
*/
  public UserAgent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "StartingUrls",
        "The starting URLs from which the scanner finds site pages.\n\n\n- - -",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "UserAgent",
        "Type of the user agents used for scanning\nDefault value is `CHROME_LINUX`.\nPossible values are: `USER_AGENT_UNSPECIFIED`, `CHROME_LINUX`, `CHROME_ANDROID`, `SAFARI_IPHONE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "BlacklistPatterns",
        "The blacklist URL patterns as described in\nhttps://cloud.google.com/security-scanner/docs/excluded-urls",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ExportToSecurityCommandCenter",
        "Controls export of scan configurations and results to Cloud Security Command Center.\nDefault value is `ENABLED`.\nPossible values are: `ENABLED`, `DISABLED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxQps",
        "The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively.\nDefaults to 15.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Schedule",
        "The schedule of the ScanConfig\nStructure is documented below.",
        Compute_SecurityScanConfigSchedule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Authentication",
        "The authentication configuration.\nIf specified, service will use the authentication configuration during scanning.\nStructure is documented below.",
        Compute_SecurityScanConfigAuthentication_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The user provider display name of the ScanConfig.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "TargetPlatforms",
        "Set of Cloud Platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.\nEach value may be one of: `APP_ENGINE`, `COMPUTE`.",
        InputType_String_GetTypes(),
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
    ];
  }
}
