import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord,
  dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord_GetTypes,
} from "../types/dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord";
import {
  dataform_RepositoryReleaseConfigCodeCompilationConfig,
  dataform_RepositoryReleaseConfigCodeCompilationConfig_GetTypes,
} from "../types/dataform_RepositoryReleaseConfigCodeCompilationConfig";

export interface RepositoryReleaseConfigArgs {
  /*
Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.


- - -
*/
  gitCommitish?: string;

  // The release's name.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // A reference to the region
  region?: string;

  // A reference to the Dataform repository
  repository?: string;

  // Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  timeZone?: string;

  /*
Optional. If set, fields of codeCompilationConfig override the default compilation settings that are specified in dataform.json.
Structure is documented below.
*/
  codeCompilationConfig?: dataform_RepositoryReleaseConfigCodeCompilationConfig;

  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  cronSchedule?: string;
}
export class RepositoryReleaseConfig extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Records of the 10 most recent scheduled release attempts, ordered in in descending order of releaseTime. Updated whenever automatic creation of a compilation result is triggered by cronSchedule.
Structure is documented below.
*/
  public recentScheduledReleaseRecords?: Array<dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord>;

  // A reference to the region
  public region?: string;

  /*
Optional. If set, fields of codeCompilationConfig override the default compilation settings that are specified in dataform.json.
Structure is documented below.
*/
  public codeCompilationConfig?: dataform_RepositoryReleaseConfigCodeCompilationConfig;

  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  public cronSchedule?: string;

  /*
Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.


- - -
*/
  public gitCommitish?: string;

  // The release's name.
  public name?: string;

  // A reference to the Dataform repository
  public repository?: string;

  // Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  public timeZone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "repository",
        "A reference to the Dataform repository",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeZone",
        "Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "codeCompilationConfig",
        "Optional. If set, fields of codeCompilationConfig override the default compilation settings that are specified in dataform.json.\nStructure is documented below.",
        () => dataform_RepositoryReleaseConfigCodeCompilationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cronSchedule",
        "Optional. Optional schedule (in cron format) for automatic creation of compilation results.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "gitCommitish",
        "Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The release's name.",
        () => [],
        false,
        true,
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
        InputType.String,
        "region",
        "A reference to the region",
        () => [],
        false,
        true,
      ),
    ];
  }
}
