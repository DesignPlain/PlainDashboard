import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutput {
  // Identifies a Lambda function as the destination.
  lambdaOutput?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput;

  // The name of the in-application stream.
  name?: string;

  //
  outputId?: string;

  // Describes the data format when records are written to the destination.
  destinationSchema?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema;

  // Identifies a Kinesis Data Firehose delivery stream as the destination.
  kinesisFirehoseOutput?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput;

  // Identifies a Kinesis data stream as the destination.
  kinesisStreamsOutput?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kinesisFirehoseOutput",
      "Identifies a Kinesis Data Firehose delivery stream as the destination.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisStreamsOutput",
      "Identifies a Kinesis data stream as the destination.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lambdaOutput",
      "Identifies a Lambda function as the destination.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the in-application stream.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "outputId", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "destinationSchema",
      "Describes the data format when records are written to the destination.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
