import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TagOptionResourceAssociationArgs {
  // Resource identifier.
  resourceId?: string;

  // Tag Option identifier.
  tagOptionId?: string;
}
export class TagOptionResourceAssociation extends Resource {
  // Description of the resource.
  public resourceName?: string;

  // Tag Option identifier.
  public tagOptionId?: string;

  // ARN of the resource.
  public resourceArn?: string;

  // Creation time of the resource.
  public resourceCreatedTime?: string;

  // Description of the resource.
  public resourceDescription?: string;

  // Resource identifier.
  public resourceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "Resource identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tagOptionId",
        "Tag Option identifier.",
        [],
        true,
        true,
      ),
    ];
  }
}
