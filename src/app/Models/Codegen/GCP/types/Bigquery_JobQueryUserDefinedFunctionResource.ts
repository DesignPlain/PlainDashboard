import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_JobQueryUserDefinedFunctionResource {
  /*
An inline resource that contains code for a user-defined function (UDF).
Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
*/
  InlineCode?: string;

  // A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
  ResourceUri?: string;
}

export function Bigquery_JobQueryUserDefinedFunctionResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InlineCode",
      "An inline resource that contains code for a user-defined function (UDF).\nProviding a inline code resource is equivalent to providing a URI for a file containing the same code.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResourceUri",
      "A code resource to load from a Google Cloud Storage URI (gs://bucket/path).",
      [],
      false,
      true,
    ),
  ];
}
