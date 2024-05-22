import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ModelPackageGroupArgs {
  // A description for the model group.
  modelPackageGroupDescription?: string;

  // The name of the model group.
  modelPackageGroupName?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ModelPackageGroup extends Resource {
  // The Amazon Resource Name (ARN) assigned by AWS to this Model Package Group.
  public arn?: string;

  // A description for the model group.
  public modelPackageGroupDescription?: string;

  // The name of the model group.
  public modelPackageGroupName?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "modelPackageGroupDescription",
        "A description for the model group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "modelPackageGroupName",
        "The name of the model group.",
        [],
        true,
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
