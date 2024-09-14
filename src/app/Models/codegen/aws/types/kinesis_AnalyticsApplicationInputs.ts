import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_AnalyticsApplicationInputsSchema,
  kinesis_AnalyticsApplicationInputsSchema_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsSchema";
import {
  kinesis_AnalyticsApplicationInputsStartingPositionConfiguration,
  kinesis_AnalyticsApplicationInputsStartingPositionConfiguration_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsStartingPositionConfiguration";
import {
  kinesis_AnalyticsApplicationInputsKinesisFirehose,
  kinesis_AnalyticsApplicationInputsKinesisFirehose_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsKinesisFirehose";
import {
  kinesis_AnalyticsApplicationInputsKinesisStream,
  kinesis_AnalyticsApplicationInputsKinesisStream_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsKinesisStream";
import {
  kinesis_AnalyticsApplicationInputsParallelism,
  kinesis_AnalyticsApplicationInputsParallelism_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsParallelism";
import {
  kinesis_AnalyticsApplicationInputsProcessingConfiguration,
  kinesis_AnalyticsApplicationInputsProcessingConfiguration_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsProcessingConfiguration";

export interface kinesis_AnalyticsApplicationInputs {
  // The Name Prefix to use when creating an in-application stream.
  namePrefix?: string;

  /*
The number of Parallel in-application streams to create.
See Parallelism below for more details.
*/
  parallelism?: kinesis_AnalyticsApplicationInputsParallelism;

  /*
The Processing Configuration to transform records as they are received from the stream.
See Processing Configuration below for more details.
*/
  processingConfiguration?: kinesis_AnalyticsApplicationInputsProcessingConfiguration;

  // The Schema format of the data in the streaming source. See Source Schema below for more details.
  schema?: kinesis_AnalyticsApplicationInputsSchema;

  /*
The point at which the application starts processing records from the streaming source.
See Starting Position Configuration below for more details.
*/
  startingPositionConfigurations?: Array<kinesis_AnalyticsApplicationInputsStartingPositionConfiguration>;

  /*
The Kinesis Firehose configuration for the streaming source. Conflicts with `kinesis_stream`.
See Kinesis Firehose below for more details.
*/
  kinesisFirehose?: kinesis_AnalyticsApplicationInputsKinesisFirehose;

  /*
The Kinesis Stream configuration for the streaming source. Conflicts with `kinesis_firehose`.
See Kinesis Stream below for more details.
*/
  kinesisStream?: kinesis_AnalyticsApplicationInputsKinesisStream;

  // The ARN of the Kinesis Analytics Application.
  id?: string;

  //
  streamNames?: Array<string>;
}

export function kinesis_AnalyticsApplicationInputs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namePrefix",
      "The Name Prefix to use when creating an in-application stream.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "startingPositionConfigurations",
      "The point at which the application starts processing records from the streaming source.\nSee Starting Position Configuration below for more details.",
      () =>
        kinesis_AnalyticsApplicationInputsStartingPositionConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ARN of the Kinesis Analytics Application.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "parallelism",
      "The number of Parallel in-application streams to create.\nSee Parallelism below for more details.",
      () => kinesis_AnalyticsApplicationInputsParallelism_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "processingConfiguration",
      "The Processing Configuration to transform records as they are received from the stream.\nSee Processing Configuration below for more details.",
      () =>
        kinesis_AnalyticsApplicationInputsProcessingConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "schema",
      "The Schema format of the data in the streaming source. See Source Schema below for more details.",
      () => kinesis_AnalyticsApplicationInputsSchema_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisFirehose",
      "The Kinesis Firehose configuration for the streaming source. Conflicts with `kinesis_stream`.\nSee Kinesis Firehose below for more details.",
      () => kinesis_AnalyticsApplicationInputsKinesisFirehose_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisStream",
      "The Kinesis Stream configuration for the streaming source. Conflicts with `kinesis_firehose`.\nSee Kinesis Stream below for more details.",
      () => kinesis_AnalyticsApplicationInputsKinesisStream_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "streamNames",
      "",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
