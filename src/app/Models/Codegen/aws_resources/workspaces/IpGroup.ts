import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  workspaces_IpGroupRule,
  workspaces_IpGroupRule_GetTypes,
} from "../types/workspaces_IpGroupRule";

export interface IpGroupArgs {
  // The description of the IP group.
  description?: string;

  // The name of the IP group.
  name?: string;

  // One or more pairs specifying the IP group rule (in CIDR format) from which web requests originate.
  rules?: Array<workspaces_IpGroupRule>;

  // A map of tags assigned to the WorkSpaces directory. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class IpGroup extends Resource {
  // One or more pairs specifying the IP group rule (in CIDR format) from which web requests originate.
  public rules?: Array<workspaces_IpGroupRule>;

  // A map of tags assigned to the WorkSpaces directory. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The description of the IP group.
  public description?: string;

  // The name of the IP group.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the IP group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the IP group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "One or more pairs specifying the IP group rule (in CIDR format) from which web requests originate.",
        workspaces_IpGroupRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags assigned to the WorkSpaces directory. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
