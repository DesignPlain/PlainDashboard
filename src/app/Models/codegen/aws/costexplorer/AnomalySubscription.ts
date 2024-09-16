import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_AnomalySubscriptionSubscriber,
  costexplorer_AnomalySubscriptionSubscriber_GetTypes,
} from '../types/costexplorer_AnomalySubscriptionSubscriber';
import {
  costexplorer_AnomalySubscriptionThresholdExpression,
  costexplorer_AnomalySubscriptionThresholdExpression_GetTypes,
} from '../types/costexplorer_AnomalySubscriptionThresholdExpression';

export interface AnomalySubscriptionArgs {
  // The unique identifier for the AWS account in which the anomaly subscription ought to be created.
  accountId?: string;

  // The frequency that anomaly reports are sent. Valid Values: `DAILY` | `IMMEDIATE` | `WEEKLY`.
  frequency?: string;

  // A list of cost anomaly monitors.
  monitorArnLists?: Array<string>;

  // The name for the subscription.
  name?: string;

  // A subscriber configuration. Multiple subscribers can be defined.
  subscribers?: Array<costexplorer_AnomalySubscriptionSubscriber>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // An Expression object used to specify the anomalies that you want to generate alerts for. See Threshold Expression.
  thresholdExpression?: costexplorer_AnomalySubscriptionThresholdExpression;
}
export class AnomalySubscription extends DS_Resource {
  // An Expression object used to specify the anomalies that you want to generate alerts for. See Threshold Expression.
  public thresholdExpression?: costexplorer_AnomalySubscriptionThresholdExpression;

  // ARN of the anomaly subscription.
  public arn?: string;

  // The frequency that anomaly reports are sent. Valid Values: `DAILY` | `IMMEDIATE` | `WEEKLY`.
  public frequency?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The unique identifier for the AWS account in which the anomaly subscription ought to be created.
  public accountId?: string;

  // A list of cost anomaly monitors.
  public monitorArnLists?: Array<string>;

  // The name for the subscription.
  public name?: string;

  // A subscriber configuration. Multiple subscribers can be defined.
  public subscribers?: Array<costexplorer_AnomalySubscriptionSubscriber>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'monitorArnLists',
        'A list of cost anomaly monitors.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name for the subscription.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subscribers',
        'A subscriber configuration. Multiple subscribers can be defined.',
        () => costexplorer_AnomalySubscriptionSubscriber_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'thresholdExpression',
        'An Expression object used to specify the anomalies that you want to generate alerts for. See Threshold Expression.',
        () => costexplorer_AnomalySubscriptionThresholdExpression_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'accountId',
        'The unique identifier for the AWS account in which the anomaly subscription ought to be created.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'frequency',
        'The frequency that anomaly reports are sent. Valid Values: `DAILY` | `IMMEDIATE` | `WEEKLY`.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
