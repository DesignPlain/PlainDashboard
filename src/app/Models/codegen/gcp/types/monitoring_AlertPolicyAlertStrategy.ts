import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy,
  monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy_GetTypes,
} from "./monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy";
import {
  monitoring_AlertPolicyAlertStrategyNotificationRateLimit,
  monitoring_AlertPolicyAlertStrategyNotificationRateLimit_GetTypes,
} from "./monitoring_AlertPolicyAlertStrategyNotificationRateLimit";

export interface monitoring_AlertPolicyAlertStrategy {
  // If an alert policy that was active has no data for this long, any open incidents will close.
  autoClose?: string;

  /*
Control over how the notification channels in `notification_channels`
are notified when this alert fires, on a per-channel basis.
Structure is documented below.
*/
  notificationChannelStrategies?: Array<monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy>;

  /*
Required for alert policies with a LogMatch condition.
This limit is not implemented for alert policies that are not log-based.
Structure is documented below.
*/
  notificationRateLimit?: monitoring_AlertPolicyAlertStrategyNotificationRateLimit;
}

export function monitoring_AlertPolicyAlertStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "autoClose",
      "If an alert policy that was active has no data for this long, any open incidents will close.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "notificationChannelStrategies",
      "Control over how the notification channels in `notification_channels`\nare notified when this alert fires, on a per-channel basis.\nStructure is documented below.",
      () =>
        monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "notificationRateLimit",
      "Required for alert policies with a LogMatch condition.\nThis limit is not implemented for alert policies that are not log-based.\nStructure is documented below.",
      () => monitoring_AlertPolicyAlertStrategyNotificationRateLimit_GetTypes(),
      false,
      false,
    ),
  ];
}
