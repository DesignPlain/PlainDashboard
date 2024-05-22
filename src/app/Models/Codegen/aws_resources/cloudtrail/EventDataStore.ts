import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudtrail_EventDataStoreAdvancedEventSelector,
  cloudtrail_EventDataStoreAdvancedEventSelector_GetTypes,
} from "../types/cloudtrail_EventDataStoreAdvancedEventSelector";

export interface EventDataStoreArgs {
  // The advanced event selectors to use to select the events for the data store. For more information about how to use advanced event selectors, see [Log events by using advanced event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced) in the CloudTrail User Guide.
  advancedEventSelectors?: Array<cloudtrail_EventDataStoreAdvancedEventSelector>;

  // Specifies the AWS KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by alias/, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
  kmsKeyId?: string;

  // Specifies whether the event data store includes events from all regions, or only from the region in which the event data store is created. Default: `true`.
  multiRegionEnabled?: boolean;

  // The name of the event data store.
  name?: string;

  // Specifies whether an event data store collects events logged for an organization in AWS Organizations. Default: `false`.
  organizationEnabled?: boolean;

  // The retention period of the event data store, in days. You can set a retention period of up to 2555 days, the equivalent of seven years. Default: `2555`.
  retentionPeriod?: number;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled. Default: `true`.
  terminationProtectionEnabled?: boolean;
}
export class EventDataStore extends Resource {
  // Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled. Default: `true`.
  public terminationProtectionEnabled?: boolean;

  // ARN of the event data store.
  public arn?: string;

  // Specifies the AWS KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by alias/, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
  public kmsKeyId?: string;

  // The retention period of the event data store, in days. You can set a retention period of up to 2555 days, the equivalent of seven years. Default: `2555`.
  public retentionPeriod?: number;

  // Specifies whether an event data store collects events logged for an organization in AWS Organizations. Default: `false`.
  public organizationEnabled?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The advanced event selectors to use to select the events for the data store. For more information about how to use advanced event selectors, see [Log events by using advanced event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced) in the CloudTrail User Guide.
  public advancedEventSelectors?: Array<cloudtrail_EventDataStoreAdvancedEventSelector>;

  // Specifies whether the event data store includes events from all regions, or only from the region in which the event data store is created. Default: `true`.
  public multiRegionEnabled?: boolean;

  // The name of the event data store.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "Specifies the AWS KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by alias/, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiRegionEnabled",
        "Specifies whether the event data store includes events from all regions, or only from the region in which the event data store is created. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the event data store.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "organizationEnabled",
        "Specifies whether an event data store collects events logged for an organization in AWS Organizations. Default: `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retentionPeriod",
        "The retention period of the event data store, in days. You can set a retention period of up to 2555 days, the equivalent of seven years. Default: `2555`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "terminationProtectionEnabled",
        "Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "advancedEventSelectors",
        "The advanced event selectors to use to select the events for the data store. For more information about how to use advanced event selectors, see [Log events by using advanced event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced) in the CloudTrail User Guide.",
        cloudtrail_EventDataStoreAdvancedEventSelector_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
