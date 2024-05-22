import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ClusterEndpointArgs {
  // The identifier to use for the new endpoint. This parameter is stored as a lowercase string.
  clusterEndpointIdentifier?: string;

  // The cluster identifier.
  clusterIdentifier?: string;

  // The type of the endpoint. One of: READER , ANY .
  customEndpointType?: string;

  // List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Conflicts with `static_members`.
  excludedMembers?: Array<string>;

  // List of DB instance identifiers that are part of the custom endpoint group. Conflicts with `excluded_members`.
  staticMembers?: Array<string>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ClusterEndpoint extends Resource {
  // List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Conflicts with `static_members`.
  public excludedMembers?: Array<string>;

  // List of DB instance identifiers that are part of the custom endpoint group. Conflicts with `excluded_members`.
  public staticMembers?: Array<string>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of cluster
  public arn?: string;

  // The identifier to use for the new endpoint. This parameter is stored as a lowercase string.
  public clusterEndpointIdentifier?: string;

  // The cluster identifier.
  public clusterIdentifier?: string;

  // The type of the endpoint. One of: READER , ANY .
  public customEndpointType?: string;

  // A custom endpoint for the Aurora cluster
  public endpoint?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "excludedMembers",
        "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Conflicts with `static_members`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "staticMembers",
        "List of DB instance identifiers that are part of the custom endpoint group. Conflicts with `excluded_members`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterEndpointIdentifier",
        "The identifier to use for the new endpoint. This parameter is stored as a lowercase string.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The cluster identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customEndpointType",
        "The type of the endpoint. One of: READER , ANY .",
        [],
        true,
        false,
      ),
    ];
  }
}
