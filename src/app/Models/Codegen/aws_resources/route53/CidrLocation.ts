import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CidrLocationArgs {
  // CIDR blocks for the location.
  cidrBlocks?: Array<string>;

  // The ID of the CIDR collection to update.
  cidrCollectionId?: string;

  // Name for the CIDR location.
  name?: string;
}
export class CidrLocation extends Resource {
  // Name for the CIDR location.
  public name?: string;

  // CIDR blocks for the location.
  public cidrBlocks?: Array<string>;

  // The ID of the CIDR collection to update.
  public cidrCollectionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "cidrBlocks",
        "CIDR blocks for the location.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cidrCollectionId",
        "The ID of the CIDR collection to update.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for the CIDR location.",
        [],
        false,
        false,
      ),
    ];
  }
}
