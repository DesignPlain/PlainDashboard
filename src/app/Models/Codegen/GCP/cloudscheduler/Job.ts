import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { JobHttpTarget } from "../types/JobHttpTarget";
import { JobPubsubTarget } from "../types/JobPubsubTarget";
import { JobRetryConfig } from "../types/JobRetryConfig";
import { JobAppEngineHttpTarget } from "../types/JobAppEngineHttpTarget";

export interface JobArgs {
  /*
The name of the job.


- - -
*/
  Name?: string;

  // Describes the schedule on which the job will be executed.
  Schedule?: string;

  /*
Specifies the time zone to be used in interpreting schedule.
The value of this field must be a time zone name from the tz database.
*/
  TimeZone?: string;

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
  HttpTarget?: JobHttpTarget;

  // Sets the job to a paused state. Jobs default to being enabled when this property is not set.
  Paused?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Pub/Sub target
If the job providers a Pub/Sub target the cron will publish
a message to the provided topic
Structure is documented below.
*/
  PubsubTarget?: JobPubsubTarget;

  // Region where the scheduler job resides. If it is not provided, this provider will use the provider default.
  Region?: string;

  /*
By default, if a job does not complete successfully,
meaning that an acknowledgement is not received from the handler,
then it will be retried with exponential backoff according to the settings
Structure is documented below.
*/
  RetryConfig?: JobRetryConfig;

  /*
App Engine HTTP target.
If the job providers a App Engine HTTP target the cron will
send a request to the service instance
Structure is documented below.
*/
  AppEngineHttpTarget?: JobAppEngineHttpTarget;

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
}
export class Job extends Resource {
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
  public PubsubTarget?: JobPubsubTarget;

  // Region where the scheduler job resides. If it is not provided, this provider will use the provider default.
  public Region?: string;

  /*
By default, if a job does not complete successfully,
meaning that an acknowledgement is not received from the handler,
then it will be retried with exponential backoff according to the settings
Structure is documented below.
*/
  public RetryConfig?: JobRetryConfig;

  // State of the job.
  public State?: string;

  /*
App Engine HTTP target.
If the job providers a App Engine HTTP target the cron will
send a request to the service instance
Structure is documented below.
*/
  public AppEngineHttpTarget?: JobAppEngineHttpTarget;

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
The name of the job.


- - -
*/
  public Name?: string;

  // Sets the job to a paused state. Jobs default to being enabled when this property is not set.
  public Paused?: boolean;

  // Describes the schedule on which the job will be executed.
  public Schedule?: string;

  /*
Specifies the time zone to be used in interpreting schedule.
The value of this field must be a time zone name from the tz database.
*/
  public TimeZone?: string;

  /*
A human-readable description for the job.
This string must not contain more than 500 characters.
*/
  public Description?: string;

  /*
HTTP target.
If the job providers a http_target the cron will
send a request to the targeted url
Structure is documented below.
*/
  public HttpTarget?: JobHttpTarget;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AttemptDeadline",
        "The deadline for job attempts. If the request handler does not respond by this deadline then the request is\ncancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in\nexecution logs. Cloud Scheduler will retry the job according to the RetryConfig.\nThe allowed duration for this deadline is:\n* For HTTP targets, between 15 seconds and 30 minutes.\n* For App Engine HTTP targets, between 15 seconds and 24 hours.\n* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\"",
      ),
      new DynamicUIProps(
        InputType.String,
        "Schedule",
        "Describes the schedule on which the job will be executed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TimeZone",
        "Specifies the time zone to be used in interpreting schedule.\nThe value of this field must be a time zone name from the tz database.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description for the job.\nThis string must not contain more than 500 characters.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Paused",
        "Sets the job to a paused state. Jobs default to being enabled when this property is not set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PubsubTarget",
        "Pub/Sub target\nIf the job providers a Pub/Sub target the cron will publish\na message to the provided topic\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RetryConfig",
        "By default, if a job does not complete successfully,\nmeaning that an acknowledgement is not received from the handler,\nthen it will be retried with exponential backoff according to the settings\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AppEngineHttpTarget",
        "App Engine HTTP target.\nIf the job providers a App Engine HTTP target the cron will\nsend a request to the service instance\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the job.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "HttpTarget",
        "HTTP target.\nIf the job providers a http_target the cron will\nsend a request to the targeted url\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the scheduler job resides. If it is not provided, this provider will use the provider default.",
      ),
    ];
  }
}
