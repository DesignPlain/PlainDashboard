import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securitylake_SubscriberNotificationConfiguration,
  securitylake_SubscriberNotificationConfiguration_GetTypes,
} from "../types/securitylake_SubscriberNotificationConfiguration";

export interface SubscriberNotificationArgs {
  // Specify the configuration using which you want to create the subscriber notification..
  configuration?: securitylake_SubscriberNotificationConfiguration;

  // The subscriber ID for the notification subscription.
  subscriberId?: string;
}
export class SubscriberNotification extends DS_Resource {
  // The subscriber ID for the notification subscription.
  public subscriberId?: string;

  // Specify the configuration using which you want to create the subscriber notification..
  public configuration?: securitylake_SubscriberNotificationConfiguration;

  // (--Deprecated--) The subscriber endpoint to which exception messages are posted.
  public endpointId?: string;

  // The subscriber endpoint to which exception messages are posted.
  public subscriberEndpoint?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "Specify the configuration using which you want to create the subscriber notification..",
        () => securitylake_SubscriberNotificationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subscriberId",
        "The subscriber ID for the notification subscription.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
