import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface CostAllocationTagArgs {
  // The status of a cost allocation tag. Valid values are `Active` and `Inactive`.
  status?: string;

  // The key for the cost allocation tag.
  tagKey?: string;
}
export class CostAllocationTag extends DS_Resource {
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
        "status",
        "The status of a cost allocation tag. Valid values are `Active` and `Inactive`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tagKey",
        "The key for the cost allocation tag.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
