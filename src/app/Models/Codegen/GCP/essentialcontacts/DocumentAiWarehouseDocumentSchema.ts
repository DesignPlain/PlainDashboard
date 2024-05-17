import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition_GetTypes,
} from "../types/Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition";

export interface DocumentAiWarehouseDocumentSchemaArgs {
  // Tells whether the document is a folder or a typical document.
  DocumentIsFolder?: boolean;

  // The location of the resource.
  Location?: string;

  // The unique identifier of the project.
  ProjectNumber?: string;

  /*
Defines the metadata for a schema property.
Structure is documented below.
*/
  PropertyDefinitions?: Array<Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition>;

  // Name of the schema given by the user.
  DisplayName?: string;
}
export class DocumentAiWarehouseDocumentSchema extends Resource {
  // The location of the resource.
  public Location?: string;

  // The name of the metadata property.
  public Name?: string;

  // The unique identifier of the project.
  public ProjectNumber?: string;

  /*
Defines the metadata for a schema property.
Structure is documented below.
*/
  public PropertyDefinitions?: Array<Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition>;

  // Name of the schema given by the user.
  public DisplayName?: string;

  // Tells whether the document is a folder or a typical document.
  public DocumentIsFolder?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "PropertyDefinitions",
        "Defines the metadata for a schema property.\nStructure is documented below.",
        Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Name of the schema given by the user.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DocumentIsFolder",
        "Tells whether the document is a folder or a typical document.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ProjectNumber",
        "The unique identifier of the project.",
        [],
        true,
        true,
      ),
    ];
  }
}
