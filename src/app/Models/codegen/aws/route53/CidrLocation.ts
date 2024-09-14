import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface CidrLocationArgs {
  // CIDR blocks for the location.
  cidrBlocks?: Array<string>;

  // The ID of the CIDR collection to update.
  cidrCollectionId?: string;

  // Name for the CIDR location.
  name?: string;
}
export class CidrLocation extends DS_Resource {
  // Name for the CIDR location.
  public name?: string;

  // CIDR blocks for the location.
  public cidrBlocks?: Array<string>;

  // The ID of the CIDR collection to update.
  public cidrCollectionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "cidrCollectionId",
        "The ID of the CIDR collection to update.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for the CIDR location.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cidrBlocks",
        "CIDR blocks for the location.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
