import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition_GetTypes,
} from "../types/essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition";

export interface DocumentAiWarehouseDocumentSchemaArgs {
  // Name of the schema given by the user.
  displayName?: string;

  // Tells whether the document is a folder or a typical document.
  documentIsFolder?: boolean;

  // The location of the resource.
  location?: string;

  // The unique identifier of the project.
  projectNumber?: string;

  /*
Defines the metadata for a schema property.
Structure is documented below.
*/
  propertyDefinitions?: Array<essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition>;
}
export class DocumentAiWarehouseDocumentSchema extends Resource {
  // Name of the schema given by the user.
  public displayName?: string;

  // Tells whether the document is a folder or a typical document.
  public documentIsFolder?: boolean;

  // The location of the resource.
  public location?: string;

  // The name of the metadata property.
  public name?: string;

  // The unique identifier of the project.
  public projectNumber?: string;

  /*
Defines the metadata for a schema property.
Structure is documented below.
*/
  public propertyDefinitions?: Array<essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Name of the schema given by the user.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "documentIsFolder",
        "Tells whether the document is a folder or a typical document.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectNumber",
        "The unique identifier of the project.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "propertyDefinitions",
        "Defines the metadata for a schema property.\nStructure is documented below.",
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
