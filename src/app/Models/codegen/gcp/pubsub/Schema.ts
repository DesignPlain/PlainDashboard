import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SchemaArgs {
  /*
The definition of the schema.
This should contain a string representing the full definition of the schema
that is a valid schema definition of the type specified in type. Changes
to the definition commit new [schema revisions](https://cloud.google.com/pubsub/docs/commit-schema-revision).
A schema can only have up to 20 revisions, so updates that fail with an
error indicating that the limit has been reached require manually
[deleting old revisions](https://cloud.google.com/pubsub/docs/delete-schema-revision).
*/
  definition?: string;

  /*
The ID to use for the schema, which will become the final component of the schema's resource name.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The type of the schema definition
Default value is `TYPE_UNSPECIFIED`.
Possible values are: `TYPE_UNSPECIFIED`, `PROTOCOL_BUFFER`, `AVRO`.
*/
  type?: string;
}
export class Schema extends DS_Resource {
  /*
The definition of the schema.
This should contain a string representing the full definition of the schema
that is a valid schema definition of the type specified in type. Changes
to the definition commit new [schema revisions](https://cloud.google.com/pubsub/docs/commit-schema-revision).
A schema can only have up to 20 revisions, so updates that fail with an
error indicating that the limit has been reached require manually
[deleting old revisions](https://cloud.google.com/pubsub/docs/delete-schema-revision).
*/
  public definition?: string;

  /*
The ID to use for the schema, which will become the final component of the schema's resource name.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The type of the schema definition
Default value is `TYPE_UNSPECIFIED`.
Possible values are: `TYPE_UNSPECIFIED`, `PROTOCOL_BUFFER`, `AVRO`.
*/
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of the schema definition\nDefault value is `TYPE_UNSPECIFIED`.\nPossible values are: `TYPE_UNSPECIFIED`, `PROTOCOL_BUFFER`, `AVRO`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "definition",
        "The definition of the schema.\nThis should contain a string representing the full definition of the schema\nthat is a valid schema definition of the type specified in type. Changes\nto the definition commit new [schema revisions](https://cloud.google.com/pubsub/docs/commit-schema-revision).\nA schema can only have up to 20 revisions, so updates that fail with an\nerror indicating that the limit has been reached require manually\n[deleting old revisions](https://cloud.google.com/pubsub/docs/delete-schema-revision).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID to use for the schema, which will become the final component of the schema's resource name.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
