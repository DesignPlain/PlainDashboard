import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_RoutingProfileMediaConcurrency,
  connect_RoutingProfileMediaConcurrency_GetTypes,
} from '../types/connect_RoutingProfileMediaConcurrency';
import {
  connect_RoutingProfileQueueConfig,
  connect_RoutingProfileQueueConfig_GetTypes,
} from '../types/connect_RoutingProfileQueueConfig';

export interface RoutingProfileArgs {
  // Specifies the default outbound queue for the Routing Profile.
  defaultOutboundQueueId?: string;

  // Specifies the description of the Routing Profile.
  description?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // One or more `media_concurrencies` blocks that specify the channels that agents can handle in the Contact Control Panel (CCP) for this Routing Profile. The `media_concurrencies` block is documented below.
  mediaConcurrencies?: Array<connect_RoutingProfileMediaConcurrency>;

  // Specifies the name of the Routing Profile.
  name?: string;

  // One or more `queue_configs` blocks that specify the inbound queues associated with the routing profile. If no queue is added, the agent only can make outbound calls. The `queue_configs` block is documented below.
  queueConfigs?: Array<connect_RoutingProfileQueueConfig>;

  /*
Tags to apply to the Routing Profile. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  tags?: Map<string, string>;
}
export class RoutingProfile extends DS_Resource {
  // Specifies the name of the Routing Profile.
  public name?: string;

  /*
Tags to apply to the Routing Profile. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The identifier for the Routing Profile.
  public routingProfileId?: string;

  // The Amazon Resource Name (ARN) of the Routing Profile.
  public arn?: string;

  // Specifies the default outbound queue for the Routing Profile.
  public defaultOutboundQueueId?: string;

  // Specifies the description of the Routing Profile.
  public description?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // One or more `media_concurrencies` blocks that specify the channels that agents can handle in the Contact Control Panel (CCP) for this Routing Profile. The `media_concurrencies` block is documented below.
  public mediaConcurrencies?: Array<connect_RoutingProfileMediaConcurrency>;

  // One or more `queue_configs` blocks that specify the inbound queues associated with the routing profile. If no queue is added, the agent only can make outbound calls. The `queue_configs` block is documented below.
  public queueConfigs?: Array<connect_RoutingProfileQueueConfig>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'defaultOutboundQueueId',
        'Specifies the default outbound queue for the Routing Profile.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Specifies the description of the Routing Profile.',
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
      new DynamicUIProps(
        InputType.Array,
        'mediaConcurrencies',
        'One or more `media_concurrencies` blocks that specify the channels that agents can handle in the Contact Control Panel (CCP) for this Routing Profile. The `media_concurrencies` block is documented below.',
        () => connect_RoutingProfileMediaConcurrency_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Specifies the name of the Routing Profile.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'queueConfigs',
        'One or more `queue_configs` blocks that specify the inbound queues associated with the routing profile. If no queue is added, the agent only can make outbound calls. The `queue_configs` block is documented below.',
        () => connect_RoutingProfileQueueConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Tags to apply to the Routing Profile. If configured with a provider\n`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
