import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataform_RepositoryReleaseConfigCodeCompilationConfig,
  Dataform_RepositoryReleaseConfigCodeCompilationConfig_GetTypes,
} from "../types/Dataform_RepositoryReleaseConfigCodeCompilationConfig";
import {
  Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord,
  Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord_GetTypes,
} from "../types/Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord";

export interface RepositoryReleaseConfigArgs {
  /*
Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.


- - -
*/
  GitCommitish?: string;

  // The release's name.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A reference to the region
  Region?: string;

  // A reference to the Dataform repository
  Repository?: string;

  // Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  TimeZone?: string;

  /*
Optional. If set, fields of codeCompilationConfig override the default compilation settings that are specified in dataform.json.
Structure is documented below.
*/
  CodeCompilationConfig?: Dataform_RepositoryReleaseConfigCodeCompilationConfig;

  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  CronSchedule?: string;
}
export class RepositoryReleaseConfig extends Resource {
  /*
Optional. If set, fields of codeCompilationConfig override the default compilation settings that are specified in dataform.json.
Structure is documented below.
*/
  public CodeCompilationConfig?: Dataform_RepositoryReleaseConfigCodeCompilationConfig;

  /*
Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.


- - -
*/
  public GitCommitish?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // A reference to the region
  public Region?: string;

  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  public CronSchedule?: string;

  // The release's name.
  public Name?: string;

  /*
Records of the 10 most recent scheduled release attempts, ordered in in descending order of releaseTime. Updated whenever automatic creation of a compilation result is triggered by cronSchedule.
Structure is documented below.
*/
  public RecentScheduledReleaseRecords?: Array<Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord>;

  // A reference to the Dataform repository
  public Repository?: string;

  // Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  public TimeZone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The release's name.",
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
        InputType.Object,
        "CodeCompilationConfig",
        "Optional. If set, fields of codeCompilationConfig override the default compilation settings that are specified in dataform.json.\nStructure is documented below.",
        Dataform_RepositoryReleaseConfigCodeCompilationConfig_GetTypes(),
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
        InputType.String,
        "GitCommitish",
        "Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
