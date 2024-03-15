export interface TopicSchemaSettings {
  /*
The encoding of messages validated against schema.
Default value is `ENCODING_UNSPECIFIED`.
Possible values are: `ENCODING_UNSPECIFIED`, `JSON`, `BINARY`.
*/
  Encoding?: string;

  /*
The name of the schema that messages published should be
validated against. Format is projects/{project}/schemas/{schema}.
The value of this field will be _deleted-schema_
if the schema has been deleted.
*/
  Schema?: string;
}
