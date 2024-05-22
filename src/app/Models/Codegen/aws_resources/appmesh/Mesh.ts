import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_MeshSpec,
  appmesh_MeshSpec_GetTypes,
} from "../types/appmesh_MeshSpec";

export interface MeshArgs {
  // Name to use for the service mesh. Must be between 1 and 255 characters in length.
  name?: string;

  // Service mesh specification to apply.
  spec?: appmesh_MeshSpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Mesh extends Resource {
  // Creation date of the service mesh.
  public createdDate?: string;

  // Last update date of the service mesh.
  public lastUpdatedDate?: string;

  // Name to use for the service mesh. Must be between 1 and 255 characters in length.
  public name?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the service mesh.
  public arn?: string;

  // AWS account ID of the service mesh's owner.
  public meshOwner?: string;

  // Resource owner's AWS account ID.
  public resourceOwner?: string;

  // Service mesh specification to apply.
  public spec?: appmesh_MeshSpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name to use for the service mesh. Must be between 1 and 255 characters in length.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spec",
        "Service mesh specification to apply.",
        appmesh_MeshSpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
