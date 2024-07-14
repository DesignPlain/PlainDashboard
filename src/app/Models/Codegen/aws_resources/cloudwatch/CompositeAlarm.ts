import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudwatch_CompositeAlarmActionsSuppressor,
  cloudwatch_CompositeAlarmActionsSuppressor_GetTypes,
} from "../types/cloudwatch_CompositeAlarmActionsSuppressor";

export interface CompositeAlarmArgs {
  // Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. Defaults to `true`.
  actionsEnabled?: boolean;

  // Actions will be suppressed if the suppressor alarm is in the ALARM state.
  actionsSuppressor?: cloudwatch_CompositeAlarmActionsSuppressor;

  // The set of actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed.
  alarmActions?: Array<string>;

  // The set of actions to execute when this alarm transitions to an `OK` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed.
  okActions?: Array<string>;

  // A map of tags to associate with the alarm. Up to 50 tags are allowed. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The description for the composite alarm.
  alarmDescription?: string;

  // The name for the composite alarm. This name must be unique within the region.
  alarmName?: string;

  // An expression that specifies which other alarms are to be evaluated to determine this composite alarm's state. For syntax, see [Creating a Composite Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html). The maximum length is 10240 characters.
  alarmRule?: string;

  // The set of actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed.
  insufficientDataActions?: Array<string>;
}
export class CompositeAlarm extends Resource {
  // Actions will be suppressed if the suppressor alarm is in the ALARM state.
  public actionsSuppressor?: cloudwatch_CompositeAlarmActionsSuppressor;

  // The description for the composite alarm.
  public alarmDescription?: string;

  // The set of actions to execute when this alarm transitions to an `OK` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed.
  public okActions?: Array<string>;

  // An expression that specifies which other alarms are to be evaluated to determine this composite alarm's state. For syntax, see [Creating a Composite Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html). The maximum length is 10240 characters.
  public alarmRule?: string;

  // The ARN of the composite alarm.
  public arn?: string;

  // The set of actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed.
  public insufficientDataActions?: Array<string>;

  // A map of tags to associate with the alarm. Up to 50 tags are allowed. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. Defaults to `true`.
  public actionsEnabled?: boolean;

  // The set of actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed.
  public alarmActions?: Array<string>;

  // The name for the composite alarm. This name must be unique within the region.
  public alarmName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "actionsEnabled",
        "Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. Defaults to `true`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "alarmActions",
        "The set of actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "alarmDescription",
        "The description for the composite alarm.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "alarmName",
        "The name for the composite alarm. This name must be unique within the region.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "alarmRule",
        "An expression that specifies which other alarms are to be evaluated to determine this composite alarm's state. For syntax, see [Creating a Composite Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html). The maximum length is 10240 characters.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "actionsSuppressor",
        "Actions will be suppressed if the suppressor alarm is in the ALARM state.",
        cloudwatch_CompositeAlarmActionsSuppressor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "okActions",
        "The set of actions to execute when this alarm transitions to an `OK` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to associate with the alarm. Up to 50 tags are allowed. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "insufficientDataActions",
        "The set of actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
