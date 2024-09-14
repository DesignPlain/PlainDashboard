import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ResourceGroupArgs {
  // Key-value map of tags that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.
  tags?: Map<string, string>;
}
export class ResourceGroup extends DS_Resource {
  // Key-value map of tags that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.
  public tags?: Map<string, string>;

  // The resource group ARN.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of tags that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.",
        () => InputType_Map_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
