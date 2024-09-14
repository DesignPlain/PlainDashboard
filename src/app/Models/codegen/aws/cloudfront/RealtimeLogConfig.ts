import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_RealtimeLogConfigEndpoint,
  cloudfront_RealtimeLogConfigEndpoint_GetTypes,
} from "../types/cloudfront_RealtimeLogConfigEndpoint";

export interface RealtimeLogConfigArgs {
  // The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. An integer between `1` and `100`, inclusive.
  samplingRate?: number;

  // The Amazon Kinesis data streams where real-time log data is sent.
  endpoint?: cloudfront_RealtimeLogConfigEndpoint;

  // The fields that are included in each real-time log record. See the [AWS documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) for supported values.
  fields?: Array<string>;

  // The unique name to identify this real-time log configuration.
  name?: string;
}
export class RealtimeLogConfig extends DS_Resource {
  // The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. An integer between `1` and `100`, inclusive.
  public samplingRate?: number;

  // The ARN (Amazon Resource Name) of the CloudFront real-time log configuration.
  public arn?: string;

  // The Amazon Kinesis data streams where real-time log data is sent.
  public endpoint?: cloudfront_RealtimeLogConfigEndpoint;

  // The fields that are included in each real-time log record. See the [AWS documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) for supported values.
  public fields?: Array<string>;

  // The unique name to identify this real-time log configuration.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "samplingRate",
        "The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. An integer between `1` and `100`, inclusive.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "endpoint",
        "The Amazon Kinesis data streams where real-time log data is sent.",
        () => cloudfront_RealtimeLogConfigEndpoint_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "fields",
        "The fields that are included in each real-time log record. See the [AWS documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) for supported values.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The unique name to identify this real-time log configuration.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
