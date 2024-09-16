import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudwatch_EventEndpointEventBus,
  cloudwatch_EventEndpointEventBus_GetTypes,
} from '../types/cloudwatch_EventEndpointEventBus';
import {
  cloudwatch_EventEndpointReplicationConfig,
  cloudwatch_EventEndpointReplicationConfig_GetTypes,
} from '../types/cloudwatch_EventEndpointReplicationConfig';
import {
  cloudwatch_EventEndpointRoutingConfig,
  cloudwatch_EventEndpointRoutingConfig_GetTypes,
} from '../types/cloudwatch_EventEndpointRoutingConfig';

export interface EventEndpointArgs {
  // A description of the global endpoint.
  description?: string;

  // The event buses to use. The names of the event buses must be identical in each Region. Exactly two event buses are required. Documented below.
  eventBuses?: Array<cloudwatch_EventEndpointEventBus>;

  // The name of the global endpoint.
  name?: string;

  // Parameters used for replication. Documented below.
  replicationConfig?: cloudwatch_EventEndpointReplicationConfig;

  // The ARN of the IAM role used for replication between event buses.
  roleArn?: string;

  // Parameters used for routing, including the health check and secondary Region. Documented below.
  routingConfig?: cloudwatch_EventEndpointRoutingConfig;
}
export class EventEndpoint extends DS_Resource {
  // A description of the global endpoint.
  public description?: string;

  // The URL of the endpoint that was created.
  public endpointUrl?: string;

  // The event buses to use. The names of the event buses must be identical in each Region. Exactly two event buses are required. Documented below.
  public eventBuses?: Array<cloudwatch_EventEndpointEventBus>;

  // The name of the global endpoint.
  public name?: string;

  // Parameters used for replication. Documented below.
  public replicationConfig?: cloudwatch_EventEndpointReplicationConfig;

  // The ARN of the IAM role used for replication between event buses.
  public roleArn?: string;

  // Parameters used for routing, including the health check and secondary Region. Documented below.
  public routingConfig?: cloudwatch_EventEndpointRoutingConfig;

  // The ARN of the endpoint that was created.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'replicationConfig',
        'Parameters used for replication. Documented below.',
        () => cloudwatch_EventEndpointReplicationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The ARN of the IAM role used for replication between event buses.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'routingConfig',
        'Parameters used for routing, including the health check and secondary Region. Documented below.',
        () => cloudwatch_EventEndpointRoutingConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the global endpoint.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'eventBuses',
        'The event buses to use. The names of the event buses must be identical in each Region. Exactly two event buses are required. Documented below.',
        () => cloudwatch_EventEndpointEventBus_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the global endpoint.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
