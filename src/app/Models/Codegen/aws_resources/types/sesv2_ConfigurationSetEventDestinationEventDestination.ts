import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination,
  sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination_GetTypes,
} from "./sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination";
import {
  sesv2_ConfigurationSetEventDestinationEventDestinationSnsDestination,
  sesv2_ConfigurationSetEventDestinationEventDestinationSnsDestination_GetTypes,
} from "./sesv2_ConfigurationSetEventDestinationEventDestinationSnsDestination";
import {
  sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestination,
  sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestination_GetTypes,
} from "./sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestination";
import {
  sesv2_ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination,
  sesv2_ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination_GetTypes,
} from "./sesv2_ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination";

export interface sesv2_ConfigurationSetEventDestinationEventDestination {
  /*
An array that specifies which events the Amazon SES API v2 should send to the destinations. Valid values: `SEND`, `REJECT`, `BOUNCE`, `COMPLAINT`, `DELIVERY`, `OPEN`, `CLICK`, `RENDERING_FAILURE`, `DELIVERY_DELAY`, `SUBSCRIPTION`.

The following arguments are optional:
*/
  matchingEventTypes?: Array<string>;

  // An object that defines an Amazon Pinpoint project destination for email events. See pinpoint_destination below.
  pinpointDestination?: sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination;

  // An object that defines an Amazon SNS destination for email events. See sns_destination below.
  snsDestination?: sesv2_ConfigurationSetEventDestinationEventDestinationSnsDestination;

  // An object that defines an Amazon CloudWatch destination for email events. See cloud_watch_destination below
  cloudWatchDestination?: sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestination;

  // When the event destination is enabled, the specified event types are sent to the destinations. Default: `false`.
  enabled?: boolean;

  // An object that defines an Amazon Kinesis Data Firehose destination for email events. See kinesis_firehose_destination below.
  kinesisFirehoseDestination?: sesv2_ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination;
}

export function sesv2_ConfigurationSetEventDestinationEventDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matchingEventTypes",
      "An array that specifies which events the Amazon SES API v2 should send to the destinations. Valid values: `SEND`, `REJECT`, `BOUNCE`, `COMPLAINT`, `DELIVERY`, `OPEN`, `CLICK`, `RENDERING_FAILURE`, `DELIVERY_DELAY`, `SUBSCRIPTION`.\n\nThe following arguments are optional:",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pinpointDestination",
      "An object that defines an Amazon Pinpoint project destination for email events. See pinpoint_destination below.",
      sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "snsDestination",
      "An object that defines an Amazon SNS destination for email events. See sns_destination below.",
      sesv2_ConfigurationSetEventDestinationEventDestinationSnsDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudWatchDestination",
      "An object that defines an Amazon CloudWatch destination for email events. See cloud_watch_destination below",
      sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "When the event destination is enabled, the specified event types are sent to the destinations. Default: `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisFirehoseDestination",
      "An object that defines an Amazon Kinesis Data Firehose destination for email events. See kinesis_firehose_destination below.",
      sesv2_ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
