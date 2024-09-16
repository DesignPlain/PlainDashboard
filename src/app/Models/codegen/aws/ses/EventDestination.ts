import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ses_EventDestinationSnsDestination,
  ses_EventDestinationSnsDestination_GetTypes,
} from '../types/ses_EventDestinationSnsDestination';
import {
  ses_EventDestinationCloudwatchDestination,
  ses_EventDestinationCloudwatchDestination_GetTypes,
} from '../types/ses_EventDestinationCloudwatchDestination';
import {
  ses_EventDestinationKinesisDestination,
  ses_EventDestinationKinesisDestination_GetTypes,
} from '../types/ses_EventDestinationKinesisDestination';

export interface EventDestinationArgs {
  /*
Send the events to an SNS Topic destination

> --NOTE:-- You can specify `"cloudwatch_destination"` or `"kinesis_destination"` but not both
*/
  snsDestination?: ses_EventDestinationSnsDestination;

  // CloudWatch destination for the events
  cloudwatchDestinations?: Array<ses_EventDestinationCloudwatchDestination>;

  // The name of the configuration set
  configurationSetName?: string;

  // If true, the event destination will be enabled
  enabled?: boolean;

  // Send the events to a kinesis firehose destination
  kinesisDestination?: ses_EventDestinationKinesisDestination;

  // A list of matching types. May be any of `"send"`, `"reject"`, `"bounce"`, `"complaint"`, `"delivery"`, `"open"`, `"click"`, or `"renderingFailure"`.
  matchingTypes?: Array<string>;

  // The name of the event destination
  name?: string;
}
export class EventDestination extends DS_Resource {
  // The name of the configuration set
  public configurationSetName?: string;

  // If true, the event destination will be enabled
  public enabled?: boolean;

  // Send the events to a kinesis firehose destination
  public kinesisDestination?: ses_EventDestinationKinesisDestination;

  // A list of matching types. May be any of `"send"`, `"reject"`, `"bounce"`, `"complaint"`, `"delivery"`, `"open"`, `"click"`, or `"renderingFailure"`.
  public matchingTypes?: Array<string>;

  // The name of the event destination
  public name?: string;

  /*
Send the events to an SNS Topic destination

> --NOTE:-- You can specify `"cloudwatch_destination"` or `"kinesis_destination"` but not both
*/
  public snsDestination?: ses_EventDestinationSnsDestination;

  // The SES event destination ARN.
  public arn?: string;

  // CloudWatch destination for the events
  public cloudwatchDestinations?: Array<ses_EventDestinationCloudwatchDestination>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'kinesisDestination',
        'Send the events to a kinesis firehose destination',
        () => ses_EventDestinationKinesisDestination_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'matchingTypes',
        'A list of matching types. May be any of `"send"`, `"reject"`, `"bounce"`, `"complaint"`, `"delivery"`, `"open"`, `"click"`, or `"renderingFailure"`.',
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the event destination',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'snsDestination',
        'Send the events to an SNS Topic destination\n\n> **NOTE:** You can specify `"cloudwatch_destination"` or `"kinesis_destination"` but not both',
        () => ses_EventDestinationSnsDestination_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'cloudwatchDestinations',
        'CloudWatch destination for the events',
        () => ses_EventDestinationCloudwatchDestination_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'configurationSetName',
        'The name of the configuration set',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'If true, the event destination will be enabled',
        () => [],
        false,
        true,
      ),
    ];
  }
}
