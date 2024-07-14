import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface CostAllocationTagArgs {
  // The status of a cost allocation tag. Valid values are `Active` and `Inactive`.
  status?: string;

  // The key for the cost allocation tag.
  tagKey?: string;
}
export class CostAllocationTag extends Resource {
  // The status of a cost allocation tag. Valid values are `Active` and `Inactive`.
  public status?: string;

  // The key for the cost allocation tag.
  public tagKey?: string;

  // The type of cost allocation tag.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "tagKey",
        "The key for the cost allocation tag.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "The status of a cost allocation tag. Valid values are `Active` and `Inactive`.",
        [],
        true,
        false,
      ),
    ];
  }
}
