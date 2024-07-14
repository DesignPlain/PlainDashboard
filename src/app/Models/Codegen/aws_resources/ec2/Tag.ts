import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TagArgs {
  // The tag name.
  key?: string;

  // The ID of the EC2 resource to manage the tag for.
  resourceId?: string;

  // The value of the tag.
  value?: string;
}
export class Tag extends Resource {
  // The tag name.
  public key?: string;

  // The ID of the EC2 resource to manage the tag for.
  public resourceId?: string;

  // The value of the tag.
  public value?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "value",
        "The value of the tag.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "key",
        "The tag name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "The ID of the EC2 resource to manage the tag for.",
        [],
        true,
        true,
      ),
    ];
  }
}
