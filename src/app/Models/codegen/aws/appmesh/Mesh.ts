import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_MeshSpec,
  appmesh_MeshSpec_GetTypes,
} from "../types/appmesh_MeshSpec";

export interface MeshArgs {
  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name to use for the service mesh. Must be between 1 and 255 characters in length.
  name?: string;

  // Service mesh specification to apply.
  spec?: appmesh_MeshSpec;
}
export class Mesh extends DS_Resource {
  // Last update date of the service mesh.
  public lastUpdatedDate?: string;

  // Service mesh specification to apply.
  public spec?: appmesh_MeshSpec;

  // Resource owner's AWS account ID.
  public resourceOwner?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the service mesh.
  public arn?: string;

  // Creation date of the service mesh.
  public createdDate?: string;

  // AWS account ID of the service mesh's owner.
  public meshOwner?: string;

  // Name to use for the service mesh. Must be between 1 and 255 characters in length.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name to use for the service mesh. Must be between 1 and 255 characters in length.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spec",
        "Service mesh specification to apply.",
        () => appmesh_MeshSpec_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
