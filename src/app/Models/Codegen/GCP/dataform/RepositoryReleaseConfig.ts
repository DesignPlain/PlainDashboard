import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RepositoryReleaseConfigCodeCompilationConfig } from "../types/RepositoryReleaseConfigCodeCompilationConfig";
import { RepositoryReleaseConfigRecentScheduledReleaseRecord } from "../types/RepositoryReleaseConfigRecentScheduledReleaseRecord";

export interface RepositoryReleaseConfigArgs {
  /*
Optional. If set, fields of codeCompilationConfig override the default compilation settings that are specified in dataform.json.
Structure is documented below.
*/
  CodeCompilationConfig?: RepositoryReleaseConfigCodeCompilationConfig;

  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  CronSchedule?: string;

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
}
export class RepositoryReleaseConfig extends Resource {
  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  public CronSchedule?: string;

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

  // Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  public TimeZone?: string;

  /*
Optional. If set, fields of codeCompilationConfig override the default compilation settings that are specified in dataform.json.
Structure is documented below.
*/
  public CodeCompilationConfig?: RepositoryReleaseConfigCodeCompilationConfig;

  // The release's name.
  public Name?: string;

  /*
Records of the 10 most recent scheduled release attempts, ordered in in descending order of releaseTime. Updated whenever automatic creation of a compilation result is triggered by cronSchedule.
Structure is documented below.
*/
  public RecentScheduledReleaseRecords?: Array<RepositoryReleaseConfigRecentScheduledReleaseRecord>;

  // A reference to the Dataform repository
  public Repository?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Repository",
        "A reference to the Dataform repository",
      ),
      new DynamicUIProps(
        InputType.String,
        "TimeZone",
        "Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CodeCompilationConfig",
        "Optional. If set, fields of codeCompilationConfig override the default compilation settings that are specified in dataform.json.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CronSchedule",
        "Optional. Optional schedule (in cron format) for automatic creation of compilation results.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GitCommitish",
        "Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.\n\n\n- - -",
      ),
      new DynamicUIProps(InputType.String, "Name", "The release's name."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A reference to the region",
      ),
    ];
  }
}
