import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  verifiedpermissions_SchemaDefinition,
  verifiedpermissions_SchemaDefinition_GetTypes,
} from "../types/verifiedpermissions_SchemaDefinition";

export interface SchemaArgs {
  // The definition of the schema.
  definition?: verifiedpermissions_SchemaDefinition;

  // The ID of the Policy Store.
  policyStoreId?: string;
}
export class Schema extends Resource {
  // The definition of the schema.
  public definition?: verifiedpermissions_SchemaDefinition;

  // (Optional) Identifies the namespaces of the entities referenced by this schema.
  public namespaces?: Array<string>;

  // The ID of the Policy Store.
  public policyStoreId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "definition",
        "The definition of the schema.",
        verifiedpermissions_SchemaDefinition_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyStoreId",
        "The ID of the Policy Store.",
        [],
        true,
        false,
      ),
    ];
  }
}
