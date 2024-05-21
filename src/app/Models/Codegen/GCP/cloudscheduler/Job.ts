import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudscheduler_JobHttpTarget,
  cloudscheduler_JobHttpTarget_GetTypes,
} from "../types/cloudscheduler_JobHttpTarget";
import {
  cloudscheduler_JobAppEngineHttpTarget,
  cloudscheduler_JobAppEngineHttpTarget_GetTypes,
} from "../types/cloudscheduler_JobAppEngineHttpTarget";
import {
  cloudscheduler_JobPubsubTarget,
  cloudscheduler_JobPubsubTarget_GetTypes,
} from "../types/cloudscheduler_JobPubsubTarget";
import {
  cloudscheduler_JobRetryConfig,
  cloudscheduler_JobRetryConfig_GetTypes,
} from "../types/cloudscheduler_JobRetryConfig";

export interface JobArgs {
  // Sets the job to a paused state. Jobs default to being enabled when this property is not set.
  paused?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Pub/Sub target
If the job providers a Pub/Sub target the cron will publish
a message to the provided topic
Structure is documented below.
*/
  pubsubTarget?: cloudscheduler_JobPubsubTarget;

  // Region where the scheduler job resides. If it is not provided, this provider will use the provider default.
  region?: string;

  /*
By default, if a job does not complete successfully,
meaning that an acknowledgement is not received from the handler,
then it will be retried with exponential backoff according to the settings
Structure is documented below.
*/
  retryConfig?: cloudscheduler_JobRetryConfig;

  /*
The deadline for job attempts. If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:
- For HTTP targets, between 15 seconds and 30 minutes.
- For App Engine HTTP targets, between 15 seconds and 24 hours.
- --Note--: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
*/
  attemptDeadline?: string;

  /*
HTTP target.
If the job providers a http_target the cron will
send a request to the targeted url
Structure is documented below.
*/
  httpTarget?: cloudscheduler_JobHttpTarget;

  /*
The name of the job.


- - -
*/
  name?: string;

  /*
Specifies the time zone to be used in interpreting schedule.
The value of this field must be a time zone name from the tz database.
*/
  timeZone?: string;

  /*
App Engine HTTP target.
If the job providers a App Engine HTTP target the cron will
send a request to the service instance
Structure is documented below.
*/
  appEngineHttpTarget?: cloudscheduler_JobAppEngineHttpTarget;

  /*
A human-readable description for the job.
This string must not contain more than 500 characters.
*/
  description?: string;

  // Describes the schedule on which the job will be executed.
  schedule?: string;
}
export class Job extends Resource {
  /*
Specifies the time zone to be used in interpreting schedule.
The value of this field must be a time zone name from the tz database.
*/
  public timeZone?: string;

  /*
App Engine HTTP target.
If the job providers a App Engine HTTP target the cron will
send a request to the service instance
Structure is documented below.
*/
  public appEngineHttpTarget?: cloudscheduler_JobAppEngineHttpTarget;

  /*
The deadline for job attempts. If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:
- For HTTP targets, between 15 seconds and 30 minutes.
- For App Engine HTTP targets, between 15 seconds and 24 hours.
- --Note--: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
*/
  public attemptDeadline?: string;

  /*
A human-readable description for the job.
This string must not contain more than 500 characters.
*/
  public description?: string;

  /*
The name of the job.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Pub/Sub target
If the job providers a Pub/Sub target the cron will publish
a message to the provided topic
Structure is documented below.
*/
  public pubsubTarget?: cloudscheduler_JobPubsubTarget;

  /*
HTTP target.
If the job providers a http_target the cron will
send a request to the targeted url
Structure is documented below.
*/
  public httpTarget?: cloudscheduler_JobHttpTarget;

  // Sets the job to a paused state. Jobs default to being enabled when this property is not set.
  public paused?: boolean;

  // Region where the scheduler job resides. If it is not provided, this provider will use the provider default.
  public region?: string;

  /*
By default, if a job does not complete successfully,
meaning that an acknowledgement is not received from the handler,
then it will be retried with exponential backoff according to the settings
Structure is documented below.
*/
  public retryConfig?: cloudscheduler_JobRetryConfig;

  // Describes the schedule on which the job will be executed.
  public schedule?: string;

  // State of the job.
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "paused",
        "Sets the job to a paused state. Jobs default to being enabled when this property is not set.",
        [],
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
        InputType.Object,
        "retryConfig",
        "By default, if a job does not complete successfully,\nmeaning that an acknowledgement is not received from the handler,\nthen it will be retried with exponential backoff according to the settings\nStructure is documented below.",
        cloudscheduler_JobRetryConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "httpTarget",
        "HTTP target.\nIf the job providers a http_target the cron will\nsend a request to the targeted url\nStructure is documented below.",
        cloudscheduler_JobHttpTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human-readable description for the job.\nThis string must not contain more than 500 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schedule",
        "Describes the schedule on which the job will be executed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "pubsubTarget",
        "Pub/Sub target\nIf the job providers a Pub/Sub target the cron will publish\na message to the provided topic\nStructure is documented below.",
        cloudscheduler_JobPubsubTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "Region where the scheduler job resides. If it is not provided, this provider will use the provider default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "attemptDeadline",
        "The deadline for job attempts. If the request handler does not respond by this deadline then the request is\ncancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in\nexecution logs. Cloud Scheduler will retry the job according to the RetryConfig.\nThe allowed duration for this deadline is:\n* For HTTP targets, between 15 seconds and 30 minutes.\n* For App Engine HTTP targets, between 15 seconds and 24 hours.\n* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\"",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the job.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeZone",
        "Specifies the time zone to be used in interpreting schedule.\nThe value of this field must be a time zone name from the tz database.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "appEngineHttpTarget",
        "App Engine HTTP target.\nIf the job providers a App Engine HTTP target the cron will\nsend a request to the service instance\nStructure is documented below.",
        cloudscheduler_JobAppEngineHttpTarget_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
