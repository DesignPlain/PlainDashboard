import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy,
  Monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy_GetTypes,
} from "./Monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy";
import {
  Monitoring_AlertPolicyAlertStrategyNotificationRateLimit,
  Monitoring_AlertPolicyAlertStrategyNotificationRateLimit_GetTypes,
} from "./Monitoring_AlertPolicyAlertStrategyNotificationRateLimit";

export interface Monitoring_AlertPolicyAlertStrategy {
  /*
Control over how the notification channels in `notification_channels`
are notified when this alert fires, on a per-channel basis.
Structure is documented below.
*/
  NotificationChannelStrategies?: Array<Monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy>;

  /*
Required for alert policies with a LogMatch condition.
This limit is not implemented for alert policies that are not log-based.
Structure is documented below.
*/
  NotificationRateLimit?: Monitoring_AlertPolicyAlertStrategyNotificationRateLimit;

  // If an alert policy that was active has no data for this long, any open incidents will close.
  AutoClose?: string;
}

export function Monitoring_AlertPolicyAlertStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NotificationChannelStrategies",
      "Control over how the notification channels in `notification_channels`\nare notified when this alert fires, on a per-channel basis.\nStructure is documented below.",
      Monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NotificationRateLimit",
      "Required for alert policies with a LogMatch condition.\nThis limit is not implemented for alert policies that are not log-based.\nStructure is documented below.",
      Monitoring_AlertPolicyAlertStrategyNotificationRateLimit_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AutoClose",
      "If an alert policy that was active has no data for this long, any open incidents will close.",
      [],
      false,
      false,
    ),
  ];
}
