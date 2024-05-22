import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_AnalyticsApplicationOutputLambda,
  kinesis_AnalyticsApplicationOutputLambda_GetTypes,
} from "./kinesis_AnalyticsApplicationOutputLambda";
import {
  kinesis_AnalyticsApplicationOutputSchema,
  kinesis_AnalyticsApplicationOutputSchema_GetTypes,
} from "./kinesis_AnalyticsApplicationOutputSchema";
import {
  kinesis_AnalyticsApplicationOutputKinesisFirehose,
  kinesis_AnalyticsApplicationOutputKinesisFirehose_GetTypes,
} from "./kinesis_AnalyticsApplicationOutputKinesisFirehose";
import {
  kinesis_AnalyticsApplicationOutputKinesisStream,
  kinesis_AnalyticsApplicationOutputKinesisStream_GetTypes,
} from "./kinesis_AnalyticsApplicationOutputKinesisStream";

export interface kinesis_AnalyticsApplicationOutput {
  // The ARN of the Kinesis Analytics Application.
  id?: string;

  /*
The Kinesis Firehose configuration for the destination stream. Conflicts with `kinesis_stream`.
See Kinesis Firehose below for more details.
*/
  kinesisFirehose?: kinesis_AnalyticsApplicationOutputKinesisFirehose;

  /*
The Kinesis Stream configuration for the destination stream. Conflicts with `kinesis_firehose`.
See Kinesis Stream below for more details.
*/
  kinesisStream?: kinesis_AnalyticsApplicationOutputKinesisStream;

  // The Lambda function destination. See Lambda below for more details.
  lambda?: kinesis_AnalyticsApplicationOutputLambda;

  // The Name of the in-application stream.
  name?: string;

  // The Schema format of the data written to the destination. See Destination Schema below for more details.
  schema?: kinesis_AnalyticsApplicationOutputSchema;
}

export function kinesis_AnalyticsApplicationOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kinesisFirehose",
      "The Kinesis Firehose configuration for the destination stream. Conflicts with `kinesis_stream`.\nSee Kinesis Firehose below for more details.",
      kinesis_AnalyticsApplicationOutputKinesisFirehose_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisStream",
      "The Kinesis Stream configuration for the destination stream. Conflicts with `kinesis_firehose`.\nSee Kinesis Stream below for more details.",
      kinesis_AnalyticsApplicationOutputKinesisStream_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lambda",
      "The Lambda function destination. See Lambda below for more details.",
      kinesis_AnalyticsApplicationOutputLambda_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The Name of the in-application stream.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "schema",
      "The Schema format of the data written to the destination. See Destination Schema below for more details.",
      kinesis_AnalyticsApplicationOutputSchema_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ARN of the Kinesis Analytics Application.",
      [],
      false,
      false,
    ),
  ];
}
