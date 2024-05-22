import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_RealtimeLogConfigEndpointKinesisStreamConfig,
  cloudfront_RealtimeLogConfigEndpointKinesisStreamConfig_GetTypes,
} from "./cloudfront_RealtimeLogConfigEndpointKinesisStreamConfig";

export interface cloudfront_RealtimeLogConfigEndpoint {
  // The Amazon Kinesis data stream configuration.
  kinesisStreamConfig?: cloudfront_RealtimeLogConfigEndpointKinesisStreamConfig;

  // The type of data stream where real-time log data is sent. The only valid value is `Kinesis`.
  streamType?: string;
}

export function cloudfront_RealtimeLogConfigEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kinesisStreamConfig",
      "The Amazon Kinesis data stream configuration.",
      cloudfront_RealtimeLogConfigEndpointKinesisStreamConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamType",
      "The type of data stream where real-time log data is sent. The only valid value is `Kinesis`.",
      [],
      true,
      false,
    ),
  ];
}
