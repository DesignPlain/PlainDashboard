import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute,
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute";

export interface kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration {
  // Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination. Valid values are `NONE` and `GZIP`.  Default value is `NONE`.
  contentEncoding?: string;

  // Describes the metadata sent to the HTTP endpoint destination. See `common_attributes` block below for details.
  commonAttributes?: Array<kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute>;
}

export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "contentEncoding",
      "Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination. Valid values are `NONE` and `GZIP`.  Default value is `NONE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "commonAttributes",
      "Describes the metadata sent to the HTTP endpoint destination. See `common_attributes` block below for details.",
      () =>
        kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute_GetTypes(),
      false,
      false,
    ),
  ];
}
