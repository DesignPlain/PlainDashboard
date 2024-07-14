import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy {
  /*
The notification channels that these settings apply to. Each of these
correspond to the name field in one of the NotificationChannel objects
referenced in the notification_channels field of this AlertPolicy. The format is
`projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]`
*/
  notificationChannelNames?: Array<string>;

  // The frequency at which to send reminder notifications for open incidents.
  renotifyInterval?: string;
}

export function monitoring_AlertPolicyAlertStrategyNotificationChannelStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "notificationChannelNames",
      "The notification channels that these settings apply to. Each of these\ncorrespond to the name field in one of the NotificationChannel objects\nreferenced in the notification_channels field of this AlertPolicy. The format is\n`projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]`",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "renotifyInterval",
      "The frequency at which to send reminder notifications for open incidents.",
      [],
      false,
      false,
    ),
  ];
}
