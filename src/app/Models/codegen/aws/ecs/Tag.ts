import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TagArgs {
  // Tag name.
  key?: string;

  // Amazon Resource Name (ARN) of the ECS resource to tag.
  resourceArn?: string;

  // Tag value.
  value?: string;
}
export class Tag extends DS_Resource {
  // Tag name.
  public key?: string;

  // Amazon Resource Name (ARN) of the ECS resource to tag.
  public resourceArn?: string;

  // Tag value.
  public value?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "key",
        "Tag name.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "Amazon Resource Name (ARN) of the ECS resource to tag.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "value",
        "Tag value.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
