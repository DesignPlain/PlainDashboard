import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_TriggerActionNotificationProperty,
  glue_TriggerActionNotificationProperty_GetTypes,
} from "./glue_TriggerActionNotificationProperty";

export interface glue_TriggerAction {
  // Arguments to be passed to the job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.
  arguments?: Map<string, string>;

  // The name of the crawler to be executed. Conflicts with `job_name`.
  crawlerName?: string;

  // The name of a job to be executed. Conflicts with `crawler_name`.
  jobName?: string;

  // Specifies configuration properties of a job run notification. See Notification Property details below.
  notificationProperty?: glue_TriggerActionNotificationProperty;

  // The name of the Security Configuration structure to be used with this action.
  securityConfiguration?: string;

  // The job run timeout in minutes. It overrides the timeout value of the job.
  timeout?: number;
}

export function glue_TriggerAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "crawlerName",
      "The name of the crawler to be executed. Conflicts with `job_name`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jobName",
      "The name of a job to be executed. Conflicts with `crawler_name`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "notificationProperty",
      "Specifies configuration properties of a job run notification. See Notification Property details below.",
      glue_TriggerActionNotificationProperty_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityConfiguration",
      "The name of the Security Configuration structure to be used with this action.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeout",
      "The job run timeout in minutes. It overrides the timeout value of the job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "arguments",
      "Arguments to be passed to the job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
