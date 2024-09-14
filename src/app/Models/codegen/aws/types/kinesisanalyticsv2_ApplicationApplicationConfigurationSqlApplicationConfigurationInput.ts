import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInput {
  // Describes the number of in-application streams to create.
  inputParallelism?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism;

  // Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
  inputSchema?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema;

  // The point at which the application starts processing records from the streaming source.
  inputStartingPositionConfigurations?: Array<kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration>;

  // If the streaming source is a Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.
  kinesisFirehoseInput?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput;

  // If the streaming source is a Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).
  kinesisStreamsInput?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput;

  // The name prefix to use when creating an in-application stream.
  namePrefix?: string;

  //
  inAppStreamNames?: Array<string>;

  //
  inputId?: string;

  /*
The input processing configuration for the input.
An input processor transforms records as they are received from the stream, before the application's SQL code executes.
*/
  inputProcessingConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "inputProcessingConfiguration",
      "The input processing configuration for the input.\nAn input processor transforms records as they are received from the stream, before the application's SQL code executes.",
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "inputSchema",
      "Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.",
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inputStartingPositionConfigurations",
      "The point at which the application starts processing records from the streaming source.",
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisStreamsInput",
      "If the streaming source is a Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).",
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inAppStreamNames",
      "",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "inputId", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "inputParallelism",
      "Describes the number of in-application streams to create.",
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisFirehoseInput",
      "If the streaming source is a Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.",
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namePrefix",
      "The name prefix to use when creating an in-application stream.",
      () => [],
      true,
      false,
    ),
  ];
}
