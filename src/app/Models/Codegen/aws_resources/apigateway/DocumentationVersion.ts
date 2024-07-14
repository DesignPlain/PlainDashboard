import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DocumentationVersionArgs {
  // Description of the API documentation version.
  description?: string;

  // ID of the associated Rest API
  restApiId?: string;

  // Version identifier of the API documentation snapshot.
  version?: string;
}
export class DocumentationVersion extends Resource {
  // Description of the API documentation version.
  public description?: string;

  // ID of the associated Rest API
  public restApiId?: string;

  // Version identifier of the API documentation snapshot.
  public version?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the API documentation version.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "restApiId",
        "ID of the associated Rest API",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Version identifier of the API documentation snapshot.",
        [],
        true,
        true,
      ),
    ];
  }
}
