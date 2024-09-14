import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  glue_TriggerPredicate,
  glue_TriggerPredicate_GetTypes,
} from "../types/glue_TriggerPredicate";
import {
  glue_TriggerAction,
  glue_TriggerAction_GetTypes,
} from "../types/glue_TriggerAction";
import {
  glue_TriggerEventBatchingCondition,
  glue_TriggerEventBatchingCondition_GetTypes,
} from "../types/glue_TriggerEventBatchingCondition";

export interface TriggerArgs {
  // The name of the trigger.
  name?: string;

  // A predicate to specify when the new trigger should fire. Required when trigger type is `CONDITIONAL`. See Predicate Below.
  predicate?: glue_TriggerPredicate;

  // Set to true to start `SCHEDULED` and `CONDITIONAL` triggers when created. True is not supported for `ON_DEMAND` triggers.
  startOnCreation?: boolean;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A workflow to which the trigger should be associated to. Every workflow graph (DAG) needs a starting trigger (`ON_DEMAND` or `SCHEDULED` type) and can contain multiple additional `CONDITIONAL` triggers.
  workflowName?: string;

  // List of actions initiated by this trigger when it fires. See Actions Below.
  actions?: Array<glue_TriggerAction>;

  // A description of the new trigger.
  description?: string;

  // Start the trigger. Defaults to `true`.
  enabled?: boolean;

  // Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. See Event Batching Condition.
  eventBatchingConditions?: Array<glue_TriggerEventBatchingCondition>;

  // A cron expression used to specify the schedule. [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html)
  schedule?: string;

  // The type of trigger. Valid values are `CONDITIONAL`, `EVENT`, `ON_DEMAND`, and `SCHEDULED`.
  type?: string;
}
export class Trigger extends DS_Resource {
  // Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. See Event Batching Condition.
  public eventBatchingConditions?: Array<glue_TriggerEventBatchingCondition>;

  // The current state of the trigger.
  public state?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Start the trigger. Defaults to `true`.
  public enabled?: boolean;

  // Amazon Resource Name (ARN) of Glue Trigger
  public arn?: string;

  // A cron expression used to specify the schedule. [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html)
  public schedule?: string;

  // Set to true to start `SCHEDULED` and `CONDITIONAL` triggers when created. True is not supported for `ON_DEMAND` triggers.
  public startOnCreation?: boolean;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A workflow to which the trigger should be associated to. Every workflow graph (DAG) needs a starting trigger (`ON_DEMAND` or `SCHEDULED` type) and can contain multiple additional `CONDITIONAL` triggers.
  public workflowName?: string;

  // List of actions initiated by this trigger when it fires. See Actions Below.
  public actions?: Array<glue_TriggerAction>;

  // The name of the trigger.
  public name?: string;

  // A predicate to specify when the new trigger should fire. Required when trigger type is `CONDITIONAL`. See Predicate Below.
  public predicate?: glue_TriggerPredicate;

  // The type of trigger. Valid values are `CONDITIONAL`, `EVENT`, `ON_DEMAND`, and `SCHEDULED`.
  public type?: string;

  // A description of the new trigger.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "startOnCreation",
        "Set to true to start `SCHEDULED` and `CONDITIONAL` triggers when created. True is not supported for `ON_DEMAND` triggers.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workflowName",
        "A workflow to which the trigger should be associated to. Every workflow graph (DAG) needs a starting trigger (`ON_DEMAND` or `SCHEDULED` type) and can contain multiple additional `CONDITIONAL` triggers.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "actions",
        "List of actions initiated by this trigger when it fires. See Actions Below.",
        () => glue_TriggerAction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the new trigger.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "eventBatchingConditions",
        "Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. See Event Batching Condition.",
        () => glue_TriggerEventBatchingCondition_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schedule",
        "A cron expression used to specify the schedule. [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html)",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the trigger.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "predicate",
        "A predicate to specify when the new trigger should fire. Required when trigger type is `CONDITIONAL`. See Predicate Below.",
        () => glue_TriggerPredicate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of trigger. Valid values are `CONDITIONAL`, `EVENT`, `ON_DEMAND`, and `SCHEDULED`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Start the trigger. Defaults to `true`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
