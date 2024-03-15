import { AlertPolicyAlertStrategyNotificationChannelStrategy } from "./AlertPolicyAlertStrategyNotificationChannelStrategy";
import { AlertPolicyAlertStrategyNotificationRateLimit } from "./AlertPolicyAlertStrategyNotificationRateLimit";

export interface AlertPolicyAlertStrategy {
  // If an alert policy that was active has no data for this long, any open incidents will close.
  AutoClose?: string;

  /*
Control over how the notification channels in `notification_channels`
are notified when this alert fires, on a per-channel basis.
Structure is documented below.
*/
  NotificationChannelStrategies?: Array<AlertPolicyAlertStrategyNotificationChannelStrategy>;

  /*
Required for alert policies with a LogMatch condition.
This limit is not implemented for alert policies that are not log-based.
Structure is documented below.
*/
  NotificationRateLimit?: AlertPolicyAlertStrategyNotificationRateLimit;
}
