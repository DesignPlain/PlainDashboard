import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ResourceAssociationArgs {
  // Amazon Resource Name (ARN) of the RAM Resource Share.
  resourceShareArn?: string;

  // Amazon Resource Name (ARN) of the resource to associate with the RAM Resource Share.
  resourceArn?: string;
}
export class ResourceAssociation extends Resource {
  // Amazon Resource Name (ARN) of the resource to associate with the RAM Resource Share.
  public resourceArn?: string;

  // Amazon Resource Name (ARN) of the RAM Resource Share.
  public resourceShareArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "Amazon Resource Name (ARN) of the resource to associate with the RAM Resource Share.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceShareArn",
        "Amazon Resource Name (ARN) of the RAM Resource Share.",
        [],
        true,
        true,
      ),
    ];
  }
}
