import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudscheduler_JobAppEngineHttpTarget,
  Cloudscheduler_JobAppEngineHttpTarget_GetTypes,
} from "../types/Cloudscheduler_JobAppEngineHttpTarget";
import {
  Cloudscheduler_JobHttpTarget,
  Cloudscheduler_JobHttpTarget_GetTypes,
} from "../types/Cloudscheduler_JobHttpTarget";
import {
  Cloudscheduler_JobRetryConfig,
  Cloudscheduler_JobRetryConfig_GetTypes,
} from "../types/Cloudscheduler_JobRetryConfig";
import {
  Cloudscheduler_JobPubsubTarget,
  Cloudscheduler_JobPubsubTarget_GetTypes,
} from "../types/Cloudscheduler_JobPubsubTarget";

export interface JobArgs {
  /*
App Engine HTTP target.
If the job providers a App Engine HTTP target the cron will
send a request to the service instance
Structure is documented below.
*/
  AppEngineHttpTarget?: Cloudscheduler_JobAppEngineHttpTarget;

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
  AttemptDeadline?: string;

  /*
A human-readable description for the job.
This string must not contain more than 500 characters.
*/
  Description?: string;

  /*
HTTP target.
If the job providers a http_target the cron will
send a request to the targeted url
Structure is documented below.
*/
  HttpTarget?: Cloudscheduler_JobHttpTarget;

  /*
The name of the job.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
By default, if a job does not complete successfully,
meaning that an acknowledgement is not received from the handler,
then it will be retried with exponential backoff according to the settings
Structure is documented below.
*/
  RetryConfig?: Cloudscheduler_JobRetryConfig;

  // Describes the schedule on which the job will be executed.
  Schedule?: string;

  // Sets the job to a paused state. Jobs default to being enabled when this property is not set.
  Paused?: boolean;

  /*
Pub/Sub target
If the job providers a Pub/Sub target the cron will publish
a message to the provided topic
Structure is documented below.
*/
  PubsubTarget?: Cloudscheduler_JobPubsubTarget;

  // Region where the scheduler job resides. If it is not provided, this provider will use the provider default.
  Region?: string;

  /*
Specifies the time zone to be used in interpreting schedule.
The value of this field must be a time zone name from the tz database.
*/
  TimeZone?: string;
}
export class Job extends Resource {
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
  public AttemptDeadline?: string;

  /*
A human-readable description for the job.
This string must not contain more than 500 characters.
*/
  public Description?: string;

  // Sets the job to a paused state. Jobs default to being enabled when this property is not set.
  public Paused?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Pub/Sub target
If the job providers a Pub/Sub target the cron will publish
a message to the provided topic
Structure is documented below.
*/
  public PubsubTarget?: Cloudscheduler_JobPubsubTarget;

  // State of the job.
  public State?: string;

  /*
Specifies the time zone to be used in interpreting schedule.
The value of this field must be a time zone name from the tz database.
*/
  public TimeZone?: string;

  /*
App Engine HTTP target.
If the job providers a App Engine HTTP target the cron will
send a request to the service instance
Structure is documented below.
*/
  public AppEngineHttpTarget?: Cloudscheduler_JobAppEngineHttpTarget;

  /*
HTTP target.
If the job providers a http_target the cron will
send a request to the targeted url
Structure is documented below.
*/
  public HttpTarget?: Cloudscheduler_JobHttpTarget;

  /*
The name of the job.


- - -
*/
  public Name?: string;

  // Region where the scheduler job resides. If it is not provided, this provider will use the provider default.
  public Region?: string;

  /*
By default, if a job does not complete successfully,
meaning that an acknowledgement is not received from the handler,
then it will be retried with exponential backoff according to the settings
Structure is documented below.
*/
  public RetryConfig?: Cloudscheduler_JobRetryConfig;

  // Describes the schedule on which the job will be executed.
  public Schedule?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "RetryConfig",
        "By default, if a job does not complete successfully,\nmeaning that an acknowledgement is not received from the handler,\nthen it will be retried with exponential backoff according to the settings\nStructure is documented below.",
        Cloudscheduler_JobRetryConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Paused",
        "Sets the job to a paused state. Jobs default to being enabled when this property is not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PubsubTarget",
        "Pub/Sub target\nIf the job providers a Pub/Sub target the cron will publish\na message to the provided topic\nStructure is documented below.",
        Cloudscheduler_JobPubsubTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "TimeZone",
        "Specifies the time zone to be used in interpreting schedule.\nThe value of this field must be a time zone name from the tz database.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AppEngineHttpTarget",
        "App Engine HTTP target.\nIf the job providers a App Engine HTTP target the cron will\nsend a request to the service instance\nStructure is documented below.",
        Cloudscheduler_JobAppEngineHttpTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description for the job.\nThis string must not contain more than 500 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the job.\n\n\n- - -",
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
        "Schedule",
        "Describes the schedule on which the job will be executed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the scheduler job resides. If it is not provided, this provider will use the provider default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AttemptDeadline",
        "The deadline for job attempts. If the request handler does not respond by this deadline then the request is\ncancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in\nexecution logs. Cloud Scheduler will retry the job according to the RetryConfig.\nThe allowed duration for this deadline is:\n* For HTTP targets, between 15 seconds and 30 minutes.\n* For App Engine HTTP targets, between 15 seconds and 24 hours.\n* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\"",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "HttpTarget",
        "HTTP target.\nIf the job providers a http_target the cron will\nsend a request to the targeted url\nStructure is documented below.",
        Cloudscheduler_JobHttpTarget_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
