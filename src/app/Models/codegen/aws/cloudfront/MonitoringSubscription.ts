import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_MonitoringSubscriptionMonitoringSubscription,
  cloudfront_MonitoringSubscriptionMonitoringSubscription_GetTypes,
} from '../types/cloudfront_MonitoringSubscriptionMonitoringSubscription';

export interface MonitoringSubscriptionArgs {
  // The ID of the distribution that you are enabling metrics for.
  distributionId?: string;

  // A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
  monitoringSubscription?: cloudfront_MonitoringSubscriptionMonitoringSubscription;
}
export class MonitoringSubscription extends DS_Resource {
  // A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
  public monitoringSubscription?: cloudfront_MonitoringSubscriptionMonitoringSubscription;

  // The ID of the distribution that you are enabling metrics for.
  public distributionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'distributionId',
        'The ID of the distribution that you are enabling metrics for.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'monitoringSubscription',
        'A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.',
        () =>
          cloudfront_MonitoringSubscriptionMonitoringSubscription_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
