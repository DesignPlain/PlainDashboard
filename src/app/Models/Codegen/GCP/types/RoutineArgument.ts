export interface RoutineArgument {
  /*
A JSON schema for the data type. Required unless argumentKind = ANY_TYPE.
~>--NOTE--: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.
*/
  DataType?: string;

  /*
Specifies whether the argument is input or output. Can be set for procedures only.
Possible values are: `IN`, `OUT`, `INOUT`.
*/
  Mode?: string;

  // The name of this argument. Can be absent for function return argument.
  Name?: string;

  /*
Defaults to FIXED_TYPE.
Default value is `FIXED_TYPE`.
Possible values are: `FIXED_TYPE`, `ANY_TYPE`.
*/
  ArgumentKind?: string;
}
