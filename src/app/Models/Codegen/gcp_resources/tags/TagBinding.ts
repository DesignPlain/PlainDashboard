import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TagBindingArgs {
  // The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123
  parent?: string;

  /*
The TagValue of the TagBinding. Must be of the form tagValues/456.


- - -
*/
  tagValue?: string;
}
export class TagBinding extends Resource {
  // The generated id for the TagBinding. This is a string of the form: `tagBindings/{full-resource-name}/{tag-value-name}`
  public name?: string;

  // The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123
  public parent?: string;

  /*
The TagValue of the TagBinding. Must be of the form tagValues/456.


- - -
*/
  public tagValue?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tagValue",
        "The TagValue of the TagBinding. Must be of the form tagValues/456.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
