import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface pubsub_getTopicSchemaSetting {
  // The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]
  encoding?: string;

  /*
The name of the schema that messages published should be
validated against. Format is projects/{project}/schemas/{schema}.
The value of this field will be _deleted-schema_
if the schema has been deleted.
*/
  schema?: string;
}

export function pubsub_getTopicSchemaSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "schema",
      "The name of the schema that messages published should be\nvalidated against. Format is projects/{project}/schemas/{schema}.\nThe value of this field will be _deleted-schema_\nif the schema has been deleted.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encoding",
      'The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]',
      [],
      true,
      false,
    ),
  ];
}
