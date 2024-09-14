import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_TriggerPredicateCondition {
  // The condition job state. Currently, the values supported are `SUCCEEDED`, `STOPPED`, `TIMEOUT` and `FAILED`. If this is specified, `job_name` must also be specified. Conflicts with `crawler_state`.
  state?: string;

  // The condition crawl state. Currently, the values supported are `RUNNING`, `SUCCEEDED`, `CANCELLED`, and `FAILED`. If this is specified, `crawler_name` must also be specified. Conflicts with `state`.
  crawlState?: string;

  // The name of the crawler to watch. If this is specified, `crawl_state` must also be specified. Conflicts with `job_name`.
  crawlerName?: string;

  // The name of the job to watch. If this is specified, `state` must also be specified. Conflicts with `crawler_name`.
  jobName?: string;

  // A logical operator. Defaults to `EQUALS`.
  logicalOperator?: string;
}

export function glue_TriggerPredicateCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "The condition job state. Currently, the values supported are `SUCCEEDED`, `STOPPED`, `TIMEOUT` and `FAILED`. If this is specified, `job_name` must also be specified. Conflicts with `crawler_state`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "crawlState",
      "The condition crawl state. Currently, the values supported are `RUNNING`, `SUCCEEDED`, `CANCELLED`, and `FAILED`. If this is specified, `crawler_name` must also be specified. Conflicts with `state`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "crawlerName",
      "The name of the crawler to watch. If this is specified, `crawl_state` must also be specified. Conflicts with `job_name`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jobName",
      "The name of the job to watch. If this is specified, `state` must also be specified. Conflicts with `crawler_name`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logicalOperator",
      "A logical operator. Defaults to `EQUALS`.",
      () => [],
      false,
      false,
    ),
  ];
}
