import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CellArgs {
  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;

  /*
Unique name describing the cell.

The following arguments are optional:
*/
  cellName?: string;

  // List of cell arns to add as nested fault domains within this cell.
  cells?: Array<string>;
}
export class Cell extends Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the cell
  public arn?: string;

  /*
Unique name describing the cell.

The following arguments are optional:
*/
  public cellName?: string;

  // List of cell arns to add as nested fault domains within this cell.
  public cells?: Array<string>;

  // List of readiness scopes (recovery groups or cells) that contain this cell.
  public parentReadinessScopes?: Array<string>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cellName",
        "Unique name describing the cell.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cells",
        "List of cell arns to add as nested fault domains within this cell.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
