import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_RoutineArgument {
  /*
Defaults to FIXED_TYPE.
Default value is `FIXED_TYPE`.
Possible values are: `FIXED_TYPE`, `ANY_TYPE`.
*/
  ArgumentKind?: string;

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
}

export function Bigquery_RoutineArgument_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DataType",
      "A JSON schema for the data type. Required unless argumentKind = ANY_TYPE.\n~>**NOTE**: Because this field expects a JSON string, any changes to the string\nwill create a diff, even if the JSON itself hasn't changed. If the API returns\na different value for the same schema, e.g. it switched the order of values\nor replaced STRUCT field type with RECORD field type, we currently cannot\nsuppress the recurring diff this causes. As a workaround, we recommend using\nthe schema as returned by the API.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "Specifies whether the argument is input or output. Can be set for procedures only.\nPossible values are: `IN`, `OUT`, `INOUT`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of this argument. Can be absent for function return argument.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ArgumentKind",
      "Defaults to FIXED_TYPE.\nDefault value is `FIXED_TYPE`.\nPossible values are: `FIXED_TYPE`, `ANY_TYPE`.",
      [],
      false,
      false,
    ),
  ];
}
