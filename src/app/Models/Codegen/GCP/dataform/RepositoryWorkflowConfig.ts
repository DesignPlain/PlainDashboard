import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataform_RepositoryWorkflowConfigInvocationConfig,
  Dataform_RepositoryWorkflowConfigInvocationConfig_GetTypes,
} from "../types/Dataform_RepositoryWorkflowConfigInvocationConfig";
import {
  Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord,
  Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord_GetTypes,
} from "../types/Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord";

export interface RepositoryWorkflowConfigArgs {
  // A reference to the region
  Region?: string;

  /*
The name of the release config whose releaseCompilationResult should be executed. Must be in the format projects/-/locations/-/repositories/-/releaseConfigs/-.


- - -
*/
  ReleaseConfig?: string;

  // A reference to the Dataform repository
  Repository?: string;

  // Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  TimeZone?: string;

  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  CronSchedule?: string;

  /*
Optional. If left unset, a default InvocationConfig will be used.
Structure is documented below.
*/
  InvocationConfig?: Dataform_RepositoryWorkflowConfigInvocationConfig;

  // The workflow's name.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class RepositoryWorkflowConfig extends Resource {
  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  public CronSchedule?: string;

  /*
Optional. If left unset, a default InvocationConfig will be used.
Structure is documented below.
*/
  public InvocationConfig?: Dataform_RepositoryWorkflowConfigInvocationConfig;

  /*
The name of the release config whose releaseCompilationResult should be executed. Must be in the format projects/-/locations/-/repositories/-/releaseConfigs/-.


- - -
*/
  public ReleaseConfig?: string;

  // A reference to the Dataform repository
  public Repository?: string;

  // Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  public TimeZone?: string;

  // The workflow's name.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Records of the 10 most recent scheduled execution attempts, ordered in in descending order of executionTime. Updated whenever automatic creation of a workflow invocation is triggered by cronSchedule.
Structure is documented below.
*/
  public RecentScheduledExecutionRecords?: Array<Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord>;

  // A reference to the region
  public Region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The workflow's name.",
        [],
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
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A reference to the region",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ReleaseConfig",
        "The name of the release config whose releaseCompilationResult should be executed. Must be in the format projects/*/locations/*/repositories/*/releaseConfigs/*.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Repository",
        "A reference to the Dataform repository",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "TimeZone",
        "Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CronSchedule",
        "Optional. Optional schedule (in cron format) for automatic creation of compilation results.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "InvocationConfig",
        "Optional. If left unset, a default InvocationConfig will be used.\nStructure is documented below.",
        Dataform_RepositoryWorkflowConfigInvocationConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
