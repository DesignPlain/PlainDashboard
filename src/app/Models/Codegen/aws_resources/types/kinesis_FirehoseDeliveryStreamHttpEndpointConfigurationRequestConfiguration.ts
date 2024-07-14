import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute,
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute";

export interface kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration {
  // Describes the metadata sent to the HTTP endpoint destination. See `common_attributes` block below for details.
  commonAttributes?: Array<kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute>;

  // Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination. Valid values are `NONE` and `GZIP`.  Default value is `NONE`.
  contentEncoding?: string;
}

export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "commonAttributes",
      "Describes the metadata sent to the HTTP endpoint destination. See `common_attributes` block below for details.",
      kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contentEncoding",
      "Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination. Valid values are `NONE` and `GZIP`.  Default value is `NONE`.",
      [],
      false,
      false,
    ),
  ];
}
