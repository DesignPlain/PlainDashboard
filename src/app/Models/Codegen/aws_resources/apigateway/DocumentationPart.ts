import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigateway_DocumentationPartLocation,
  apigateway_DocumentationPartLocation_GetTypes,
} from "../types/apigateway_DocumentationPartLocation";

export interface DocumentationPartArgs {
  // ID of the associated Rest API
  restApiId?: string;

  // Location of the targeted API entity of the to-be-created documentation part. See below.
  location?: apigateway_DocumentationPartLocation;

  // Content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., "{ \"description\": \"The API does ...\" }". Only Swagger-compliant key-value pairs can be exported and, hence, published.
  properties?: string;
}
export class DocumentationPart extends Resource {
  // Location of the targeted API entity of the to-be-created documentation part. See below.
  public location?: apigateway_DocumentationPartLocation;

  // Content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., "{ \"description\": \"The API does ...\" }". Only Swagger-compliant key-value pairs can be exported and, hence, published.
  public properties?: string;

  // ID of the associated Rest API
  public restApiId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "restApiId",
        "ID of the associated Rest API",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "location",
        "Location of the targeted API entity of the to-be-created documentation part. See below.",
        apigateway_DocumentationPartLocation_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "properties",
        'Content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., "{ \\"description\\": \\"The API does ...\\" }". Only Swagger-compliant key-value pairs can be exported and, hence, published.',
        [],
        true,
        false,
      ),
    ];
  }
}
