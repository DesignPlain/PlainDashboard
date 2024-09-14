import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DomainArgs {
  // The name of the SimpleDB domain
  name?: string;
}
export class Domain extends DS_Resource {
  // The name of the SimpleDB domain
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the SimpleDB domain",
        () => [],
        false,
        false,
      ),
    ];
  }
}
