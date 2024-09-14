import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  autoscaling_TagTag,
  autoscaling_TagTag_GetTypes,
} from "../types/autoscaling_TagTag";

export interface TagArgs {
  // Name of the Autoscaling Group to apply the tag to.
  autoscalingGroupName?: string;

  // Tag to create. The `tag` block is documented below.
  tag?: autoscaling_TagTag;
}
export class Tag extends DS_Resource {
  // Name of the Autoscaling Group to apply the tag to.
  public autoscalingGroupName?: string;

  // Tag to create. The `tag` block is documented below.
  public tag?: autoscaling_TagTag;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "autoscalingGroupName",
        "Name of the Autoscaling Group to apply the tag to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tag",
        "Tag to create. The `tag` block is documented below.",
        () => autoscaling_TagTag_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
