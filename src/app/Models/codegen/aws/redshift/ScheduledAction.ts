import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  redshift_ScheduledActionTargetAction,
  redshift_ScheduledActionTargetAction_GetTypes,
} from '../types/redshift_ScheduledActionTargetAction';

export interface ScheduledActionArgs {
  // Target action. Documented below.
  targetAction?: redshift_ScheduledActionTargetAction;

  // The description of the scheduled action.
  description?: string;

  // Whether to enable the scheduled action. Default is `true` .
  enable?: boolean;

  // The end time in UTC when the schedule is active, in UTC RFC3339 format(for example, YYYY-MM-DDTHH:MM:SSZ).
  endTime?: string;

  // The IAM role to assume to run the scheduled action.
  iamRole?: string;

  // The scheduled action name.
  name?: string;

  // The schedule of action. The schedule is defined format of "at expression" or "cron expression", for example `at(2016-03-04T17:27:00)` or `cron(0 10 ? - MON -)`. See [Scheduled Action](https://docs.aws.amazon.com/redshift/latest/APIReference/API_ScheduledAction.html) for more information.
  schedule?: string;

  // The start time in UTC when the schedule is active, in UTC RFC3339 format(for example, YYYY-MM-DDTHH:MM:SSZ).
  startTime?: string;
}
export class ScheduledAction extends DS_Resource {
  // The start time in UTC when the schedule is active, in UTC RFC3339 format(for example, YYYY-MM-DDTHH:MM:SSZ).
  public startTime?: string;

  // Target action. Documented below.
  public targetAction?: redshift_ScheduledActionTargetAction;

  // The description of the scheduled action.
  public description?: string;

  // Whether to enable the scheduled action. Default is `true` .
  public enable?: boolean;

  // The end time in UTC when the schedule is active, in UTC RFC3339 format(for example, YYYY-MM-DDTHH:MM:SSZ).
  public endTime?: string;

  // The IAM role to assume to run the scheduled action.
  public iamRole?: string;

  // The scheduled action name.
  public name?: string;

  // The schedule of action. The schedule is defined format of "at expression" or "cron expression", for example `at(2016-03-04T17:27:00)` or `cron(0 10 ? - MON -)`. See [Scheduled Action](https://docs.aws.amazon.com/redshift/latest/APIReference/API_ScheduledAction.html) for more information.
  public schedule?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the scheduled action.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enable',
        'Whether to enable the scheduled action. Default is `true` .',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'endTime',
        'The end time in UTC when the schedule is active, in UTC RFC3339 format(for example, YYYY-MM-DDTHH:MM:SSZ).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'iamRole',
        'The IAM role to assume to run the scheduled action.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The scheduled action name.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'schedule',
        'The schedule of action. The schedule is defined format of "at expression" or "cron expression", for example `at(2016-03-04T17:27:00)` or `cron(0 10 ? * MON *)`. See [Scheduled Action](https://docs.aws.amazon.com/redshift/latest/APIReference/API_ScheduledAction.html) for more information.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'startTime',
        'The start time in UTC when the schedule is active, in UTC RFC3339 format(for example, YYYY-MM-DDTHH:MM:SSZ).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'targetAction',
        'Target action. Documented below.',
        () => redshift_ScheduledActionTargetAction_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
