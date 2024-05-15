import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy {
  // The frequency at which to send reminder notifications for open incidents.
  RenotifyInterval?: string;

  /*
The notification channels that these settings apply to. Each of these
correspond to the name field in one of the NotificationChannel objects
referenced in the notification_channels field of this AlertPolicy. The format is
`projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]`
*/
  NotificationChannelNames?: Array<string>;
}

export function Monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RenotifyInterval",
      "The frequency at which to send reminder notifications for open incidents.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NotificationChannelNames",
      "The notification channels that these settings apply to. Each of these\ncorrespond to the name field in one of the NotificationChannel objects\nreferenced in the notification_channels field of this AlertPolicy. The format is\n`projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]`",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
