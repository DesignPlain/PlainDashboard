import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface QueryLogArgs {
  // CloudWatch log group ARN to send query logs.
  cloudwatchLogGroupArn?: string;

  // Route53 hosted zone ID to enable query logs.
  zoneId?: string;
}
export class QueryLog extends DS_Resource {
  // The Amazon Resource Name (ARN) of the Query Logging Config.
  public arn?: string;

  // CloudWatch log group ARN to send query logs.
  public cloudwatchLogGroupArn?: string;

  // Route53 hosted zone ID to enable query logs.
  public zoneId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "cloudwatchLogGroupArn",
        "CloudWatch log group ARN to send query logs.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zoneId",
        "Route53 hosted zone ID to enable query logs.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
