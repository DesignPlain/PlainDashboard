import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ClusterEndpointArgs {
  // The type of the endpoint. One of: `READER`, `WRITER`, `ANY`.
  endpointType?: string;

  // List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
  excludedMembers?: Array<string>;

  // List of DB instance identifiers that are part of the custom endpoint group.
  staticMembers?: Array<string>;

  // A map of tags to assign to the Neptune cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The identifier of the endpoint.
  clusterEndpointIdentifier?: string;

  // The DB cluster identifier of the DB cluster associated with the endpoint.
  clusterIdentifier?: string;
}
export class ClusterEndpoint extends DS_Resource {
  // The DNS address of the endpoint.
  public endpoint?: string;

  // The type of the endpoint. One of: `READER`, `WRITER`, `ANY`.
  public endpointType?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A map of tags to assign to the Neptune cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Neptune Cluster Endpoint Amazon Resource Name (ARN).
  public arn?: string;

  // The identifier of the endpoint.
  public clusterEndpointIdentifier?: string;

  // The DB cluster identifier of the DB cluster associated with the endpoint.
  public clusterIdentifier?: string;

  // List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
  public excludedMembers?: Array<string>;

  // List of DB instance identifiers that are part of the custom endpoint group.
  public staticMembers?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'clusterEndpointIdentifier',
        'The identifier of the endpoint.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterIdentifier',
        'The DB cluster identifier of the DB cluster associated with the endpoint.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'endpointType',
        'The type of the endpoint. One of: `READER`, `WRITER`, `ANY`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'excludedMembers',
        "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'staticMembers',
        'List of DB instance identifiers that are part of the custom endpoint group.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the Neptune cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
