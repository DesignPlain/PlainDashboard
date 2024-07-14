import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataform_RepositoryWorkflowConfigInvocationConfig,
  dataform_RepositoryWorkflowConfigInvocationConfig_GetTypes,
} from "../types/dataform_RepositoryWorkflowConfigInvocationConfig";
import {
  dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord,
  dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord_GetTypes,
} from "../types/dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord";

export interface RepositoryWorkflowConfigArgs {
  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  cronSchedule?: string;

  /*
Optional. If left unset, a default InvocationConfig will be used.
Structure is documented below.
*/
  invocationConfig?: dataform_RepositoryWorkflowConfigInvocationConfig;

  // The workflow's name.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // A reference to the region
  region?: string;

  /*
The name of the release config whose releaseCompilationResult should be executed. Must be in the format projects/-/locations/-/repositories/-/releaseConfigs/-.


- - -
*/
  releaseConfig?: string;

  // A reference to the Dataform repository
  repository?: string;

  // Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  timeZone?: string;
}
export class RepositoryWorkflowConfig extends Resource {
  // A reference to the region
  public region?: string;

  /*
The name of the release config whose releaseCompilationResult should be executed. Must be in the format projects/-/locations/-/repositories/-/releaseConfigs/-.


- - -
*/
  public releaseConfig?: string;

  // A reference to the Dataform repository
  public repository?: string;

  // Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  public timeZone?: string;

  // The workflow's name.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Records of the 10 most recent scheduled execution attempts, ordered in in descending order of executionTime. Updated whenever automatic creation of a workflow invocation is triggered by cronSchedule.
Structure is documented below.
*/
  public recentScheduledExecutionRecords?: Array<dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord>;

  // Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  public cronSchedule?: string;

  /*
Optional. If left unset, a default InvocationConfig will be used.
Structure is documented below.
*/
  public invocationConfig?: dataform_RepositoryWorkflowConfigInvocationConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "releaseConfig",
        "The name of the release config whose releaseCompilationResult should be executed. Must be in the format projects/*/locations/*/repositories/*/releaseConfigs/*.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "repository",
        "A reference to the Dataform repository",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeZone",
        "Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cronSchedule",
        "Optional. Optional schedule (in cron format) for automatic creation of compilation results.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "invocationConfig",
        "Optional. If left unset, a default InvocationConfig will be used.\nStructure is documented below.",
        dataform_RepositoryWorkflowConfigInvocationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The workflow's name.",
        [],
        false,
        true,
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
        "A reference to the region",
        [],
        false,
        true,
      ),
    ];
  }
}
