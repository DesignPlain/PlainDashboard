import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LfTagArgs {
  // List of possible values an attribute can take.
  values?: Array<string>;

  // ID of the Data Catalog to create the tag in. If omitted, this defaults to the AWS Account ID.
  catalogId?: string;

  // Key-name for the tag.
  key?: string;
}
export class LfTag extends Resource {
  // ID of the Data Catalog to create the tag in. If omitted, this defaults to the AWS Account ID.
  public catalogId?: string;

  // Key-name for the tag.
  public key?: string;

  // List of possible values an attribute can take.
  public values?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "values",
        "List of possible values an attribute can take.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "ID of the Data Catalog to create the tag in. If omitted, this defaults to the AWS Account ID.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "key",
        "Key-name for the tag.",
        [],
        true,
        true,
      ),
    ];
  }
}
