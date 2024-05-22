import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ResolverQueryLogConfigArgs {
  // The name of the Route 53 Resolver query logging configuration.
  name?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The ARN of the resource that you want Route 53 Resolver to send query logs.
You can send query logs to an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.
*/
  destinationArn?: string;
}
export class ResolverQueryLogConfig extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN (Amazon Resource Name) of the Route 53 Resolver query logging configuration.
  public arn?: string;

  /*
The ARN of the resource that you want Route 53 Resolver to send query logs.
You can send query logs to an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.
*/
  public destinationArn?: string;

  // The name of the Route 53 Resolver query logging configuration.
  public name?: string;

  // The AWS account ID of the account that created the query logging configuration.
  public ownerId?: string;

  /*
An indication of whether the query logging configuration is shared with other AWS accounts, or was shared with the current account by another AWS account.
Sharing is configured through AWS Resource Access Manager (AWS RAM).
Values are `NOT_SHARED`, `SHARED_BY_ME` or `SHARED_WITH_ME`
*/
  public shareStatus?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "destinationArn",
        "The ARN of the resource that you want Route 53 Resolver to send query logs.\nYou can send query logs to an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Route 53 Resolver query logging configuration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
