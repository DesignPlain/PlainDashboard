import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securitylake_SubscriberSource,
  securitylake_SubscriberSource_GetTypes,
} from "../types/securitylake_SubscriberSource";
import {
  securitylake_SubscriberSubscriberIdentity,
  securitylake_SubscriberSubscriberIdentity_GetTypes,
} from "../types/securitylake_SubscriberSubscriberIdentity";
import {
  securitylake_SubscriberTimeouts,
  securitylake_SubscriberTimeouts_GetTypes,
} from "../types/securitylake_SubscriberTimeouts";

export interface SubscriberArgs {
  // The supported AWS services from which logs and events are collected. Security Lake supports log and event collection for natively supported AWS services. See `source` Blocks below.
  source?: securitylake_SubscriberSource;

  // The description for your subscriber account in Security Lake.
  subscriberDescription?: string;

  // The AWS identity used to access your data. See `subscriber_identity` Block below.
  subscriberIdentity?: securitylake_SubscriberSubscriberIdentity;

  // The name of your Security Lake subscriber account.
  subscriberName?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: securitylake_SubscriberTimeouts;

  // The Amazon S3 or Lake Formation access type.
  accessType?: string;
}
export class Subscriber extends DS_Resource {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN for the Amazon Security Lake Amazon S3 bucket.
  public s3BucketArn?: string;

  // The subscriber endpoint to which exception messages are posted.
  public subscriberEndpoint?: string;

  // The AWS identity used to access your data. See `subscriber_identity` Block below.
  public subscriberIdentity?: securitylake_SubscriberSubscriberIdentity;

  // The subscriber status of the Amazon Security Lake subscriber account.
  public subscriberStatus?: string;

  // The Amazon S3 or Lake Formation access type.
  public accessType?: string;

  // ARN of the Data Lake.
  public arn?: string;

  // The description for your subscriber account in Security Lake.
  public subscriberDescription?: string;

  // The ARN of the IAM role to be used by the entity putting logs into your custom source partition.
  public roleArn?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The name of your Security Lake subscriber account.
  public subscriberName?: string;

  //
  public timeouts?: securitylake_SubscriberTimeouts;

  // The Amazon Resource Name (ARN) which uniquely defines the AWS RAM resource share. Before accepting the RAM resource share invitation, you can view details related to the RAM resource share.
  public resourceShareArn?: string;

  // The name of the resource share.
  public resourceShareName?: string;

  // The supported AWS services from which logs and events are collected. Security Lake supports log and event collection for natively supported AWS services. See `source` Blocks below.
  public source?: securitylake_SubscriberSource;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "source",
        "The supported AWS services from which logs and events are collected. Security Lake supports log and event collection for natively supported AWS services. See `source` Blocks below.",
        () => securitylake_SubscriberSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subscriberDescription",
        "The description for your subscriber account in Security Lake.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "subscriberIdentity",
        "The AWS identity used to access your data. See `subscriber_identity` Block below.",
        () => securitylake_SubscriberSubscriberIdentity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subscriberName",
        "The name of your Security Lake subscriber account.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => securitylake_SubscriberTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessType",
        "The Amazon S3 or Lake Formation access type.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
