import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_getRealtimeLogConfigEndpointKinesisStreamConfig,
  cloudfront_getRealtimeLogConfigEndpointKinesisStreamConfig_GetTypes,
} from "./cloudfront_getRealtimeLogConfigEndpointKinesisStreamConfig";

export interface cloudfront_getRealtimeLogConfigEndpoint {
  // (Required) Amazon Kinesis data stream configuration.
  kinesisStreamConfigs?: Array<cloudfront_getRealtimeLogConfigEndpointKinesisStreamConfig>;

  // (Required) Type of data stream where real-time log data is sent. The only valid value is `Kinesis`.
  streamType?: string;
}

export function cloudfront_getRealtimeLogConfigEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "kinesisStreamConfigs",
      "(Required) Amazon Kinesis data stream configuration.",
      () =>
        cloudfront_getRealtimeLogConfigEndpointKinesisStreamConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamType",
      "(Required) Type of data stream where real-time log data is sent. The only valid value is `Kinesis`.",
      () => [],
      true,
      false,
    ),
  ];
}
