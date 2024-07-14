import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface MaintenanceWindowArgs {
  // Whether the maintenance window is enabled. Default: `true`.
  enabled?: boolean;

  // Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to no longer run the maintenance window.
  endDate?: string;

  // The schedule of the Maintenance Window in the form of a [cron or rate expression](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html).
  schedule?: string;

  // Timezone for schedule in [Internet Assigned Numbers Authority (IANA) Time Zone Database format](https://www.iana.org/time-zones). For example: `America/Los_Angeles`, `etc/UTC`, or `Asia/Seoul`.
  scheduleTimezone?: string;

  // A description for the maintenance window.
  description?: string;

  // The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
  cutoff?: number;

  // The duration of the Maintenance Window in hours.
  duration?: number;

  // The name of the maintenance window.
  name?: string;

  // The number of days to wait after the date and time specified by a CRON expression before running the maintenance window.
  scheduleOffset?: number;

  // Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to begin the maintenance window.
  startDate?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.
  allowUnassociatedTargets?: boolean;
}
export class MaintenanceWindow extends Resource {
  // The name of the maintenance window.
  public name?: string;

  // The schedule of the Maintenance Window in the form of a [cron or rate expression](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html).
  public schedule?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.
  public allowUnassociatedTargets?: boolean;

  // The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
  public cutoff?: number;

  // A description for the maintenance window.
  public description?: string;

  // The duration of the Maintenance Window in hours.
  public duration?: number;

  // Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to no longer run the maintenance window.
  public endDate?: string;

  // Whether the maintenance window is enabled. Default: `true`.
  public enabled?: boolean;

  // The number of days to wait after the date and time specified by a CRON expression before running the maintenance window.
  public scheduleOffset?: number;

  // Timezone for schedule in [Internet Assigned Numbers Authority (IANA) Time Zone Database format](https://www.iana.org/time-zones). For example: `America/Los_Angeles`, `etc/UTC`, or `Asia/Seoul`.
  public scheduleTimezone?: string;

  // Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to begin the maintenance window.
  public startDate?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "scheduleTimezone",
        "Timezone for schedule in [Internet Assigned Numbers Authority (IANA) Time Zone Database format](https://www.iana.org/time-zones). For example: `America/Los_Angeles`, `etc/UTC`, or `Asia/Seoul`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "duration",
        "The duration of the Maintenance Window in hours.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the maintenance window.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether the maintenance window is enabled. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endDate",
        "Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to no longer run the maintenance window.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "cutoff",
        "The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "scheduleOffset",
        "The number of days to wait after the date and time specified by a CRON expression before running the maintenance window.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "startDate",
        "Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to begin the maintenance window.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowUnassociatedTargets",
        "Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schedule",
        "The schedule of the Maintenance Window in the form of a [cron or rate expression](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description for the maintenance window.",
        [],
        false,
        false,
      ),
    ];
  }
}
