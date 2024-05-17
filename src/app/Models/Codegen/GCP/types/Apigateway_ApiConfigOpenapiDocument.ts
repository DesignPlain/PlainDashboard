import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigateway_ApiConfigOpenapiDocumentDocument,
  Apigateway_ApiConfigOpenapiDocumentDocument_GetTypes,
} from "./Apigateway_ApiConfigOpenapiDocumentDocument";

export interface Apigateway_ApiConfigOpenapiDocument {
  /*
The OpenAPI Specification document file.
Structure is documented below.
*/
  Document?: Apigateway_ApiConfigOpenapiDocumentDocument;
}

export function Apigateway_ApiConfigOpenapiDocument_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Document",
      "The OpenAPI Specification document file.\nStructure is documented below.",
      Apigateway_ApiConfigOpenapiDocumentDocument_GetTypes(),
      true,
      false,
    ),
  ];
}
