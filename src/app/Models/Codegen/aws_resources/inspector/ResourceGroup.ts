import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ResourceGroupArgs {
  // Key-value map of tags that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.
  tags?: Map<string, string>;
}
export class ResourceGroup extends Resource {
  // The resource group ARN.
  public arn?: string;

  // Key-value map of tags that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of tags that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.",
        InputType_Map_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
