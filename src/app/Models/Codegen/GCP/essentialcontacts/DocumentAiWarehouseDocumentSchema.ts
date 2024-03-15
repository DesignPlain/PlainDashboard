import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinition } from "../types/DocumentAiWarehouseDocumentSchemaPropertyDefinition";

export interface DocumentAiWarehouseDocumentSchemaArgs {
  /*
Defines the metadata for a schema property.
Structure is documented below.
*/
  PropertyDefinitions?: Array<DocumentAiWarehouseDocumentSchemaPropertyDefinition>;

  // Name of the schema given by the user.
  DisplayName?: string;

  // Tells whether the document is a folder or a typical document.
  DocumentIsFolder?: boolean;

  // The location of the resource.
  Location?: string;

  // The unique identifier of the project.
  ProjectNumber?: string;
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
  public PropertyDefinitions?: Array<DocumentAiWarehouseDocumentSchemaPropertyDefinition>;

  // Name of the schema given by the user.
  public DisplayName?: string;

  // Tells whether the document is a folder or a typical document.
  public DocumentIsFolder?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "PropertyDefinitions",
        "Defines the metadata for a schema property.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Name of the schema given by the user.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DocumentIsFolder",
        "Tells whether the document is a folder or a typical document.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ProjectNumber",
        "The unique identifier of the project.",
      ),
    ];
  }
}
