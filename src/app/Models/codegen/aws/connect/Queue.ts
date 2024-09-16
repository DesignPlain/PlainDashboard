import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_QueueOutboundCallerConfig,
  connect_QueueOutboundCallerConfig_GetTypes,
} from '../types/connect_QueueOutboundCallerConfig';

export interface QueueArgs {
  // Specifies the name of the Queue.
  name?: string;

  // Specifies a list of quick connects ids that determine the quick connects available to agents who are working the queue.
  quickConnectIds?: Array<string>;

  // Tags to apply to the Queue. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the maximum number of contacts that can be in the queue before it is considered full. Minimum value of 0.
  maxContacts?: number;

  // A block that defines the outbound caller ID name, number, and outbound whisper flow. The Outbound Caller Config block is documented below.
  outboundCallerConfig?: connect_QueueOutboundCallerConfig;

  // Specifies the description of the Queue. Valid values are `ENABLED`, `DISABLED`.
  status?: string;

  // Specifies the description of the Queue.
  description?: string;

  // Specifies the identifier of the Hours of Operation.
  hoursOfOperationId?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;
}
export class Queue extends DS_Resource {
  // The identifier for the Queue.
  public queueId?: string;

  // Specifies the description of the Queue. Valid values are `ENABLED`, `DISABLED`.
  public status?: string;

  // The Amazon Resource Name (ARN) of the Queue.
  public arn?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // A block that defines the outbound caller ID name, number, and outbound whisper flow. The Outbound Caller Config block is documented below.
  public outboundCallerConfig?: connect_QueueOutboundCallerConfig;

  // Specifies the name of the Queue.
  public name?: string;

  // Specifies a list of quick connects ids that determine the quick connects available to agents who are working the queue.
  public quickConnectIds?: Array<string>;

  // Tags to apply to the Queue. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies the description of the Queue.
  public description?: string;

  // Specifies the identifier of the Hours of Operation.
  public hoursOfOperationId?: string;

  // Specifies the maximum number of contacts that can be in the queue before it is considered full. Minimum value of 0.
  public maxContacts?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Specifies the name of the Queue.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Tags to apply to the Queue. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxContacts',
        'Specifies the maximum number of contacts that can be in the queue before it is considered full. Minimum value of 0.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'status',
        'Specifies the description of the Queue. Valid values are `ENABLED`, `DISABLED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'quickConnectIds',
        'Specifies a list of quick connects ids that determine the quick connects available to agents who are working the queue.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'outboundCallerConfig',
        'A block that defines the outbound caller ID name, number, and outbound whisper flow. The Outbound Caller Config block is documented below.',
        () => connect_QueueOutboundCallerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Specifies the description of the Queue.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'hoursOfOperationId',
        'Specifies the identifier of the Hours of Operation.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceId',
        'Specifies the identifier of the hosting Amazon Connect Instance.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
