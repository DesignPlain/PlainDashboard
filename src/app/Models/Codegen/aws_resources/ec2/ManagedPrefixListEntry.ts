import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ManagedPrefixListEntryArgs {
  // CIDR block of this entry.
  cidr?: string;

  // Description of this entry. Please note that due to API limitations, updating only the description of an entry will require recreating the entry.
  description?: string;

  // The ID of the prefix list.
  prefixListId?: string;
}
export class ManagedPrefixListEntry extends Resource {
  // CIDR block of this entry.
  public cidr?: string;

  // Description of this entry. Please note that due to API limitations, updating only the description of an entry will require recreating the entry.
  public description?: string;

  // The ID of the prefix list.
  public prefixListId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "cidr",
        "CIDR block of this entry.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of this entry. Please note that due to API limitations, updating only the description of an entry will require recreating the entry.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "prefixListId",
        "The ID of the prefix list.",
        [],
        true,
        true,
      ),
    ];
  }
}
