import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RoutineRemoteFunctionOptions } from "../types/RoutineRemoteFunctionOptions";
import { RoutineArgument } from "../types/RoutineArgument";
import { RoutineSparkOptions } from "../types/RoutineSparkOptions";

export interface RoutineArgs {
  /*
Remote function specific options.
Structure is documented below.
*/
  RemoteFunctionOptions?: RoutineRemoteFunctionOptions;

  /*
Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".
If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.
*/
  ReturnTableType?: string;

  /*
A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>--NOTE--: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.
*/
  ReturnType?: string;

  /*
The body of the routine. For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.


- - -
*/
  DefinitionBody?: string;

  /*
The determinism level of the JavaScript UDF if defined.
Possible values are: `DETERMINISM_LEVEL_UNSPECIFIED`, `DETERMINISTIC`, `NOT_DETERMINISTIC`.
*/
  DeterminismLevel?: string;

  /*
Optional. If language = "JAVASCRIPT", this field stores the path of the
imported JAVASCRIPT libraries.
*/
  ImportedLibraries?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Input/output argument of a function or a stored procedure.
Structure is documented below.
*/
  Arguments?: Array<RoutineArgument>;

  /*
The language of the routine.
Possible values are: `SQL`, `JAVASCRIPT`, `PYTHON`, `JAVA`, `SCALA`.
*/
  Language?: string;

  // The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
  RoutineId?: string;

  /*
Optional. If language is one of "PYTHON", "JAVA", "SCALA", this field stores the options for spark stored procedure.
Structure is documented below.
*/
  SparkOptions?: RoutineSparkOptions;

  // The description of the routine if defined.
  Description?: string;

  // The ID of the dataset containing this routine
  DatasetId?: string;

  /*
The type of routine.
Possible values are: `SCALAR_FUNCTION`, `PROCEDURE`, `TABLE_VALUED_FUNCTION`.
*/
  RoutineType?: string;
}
export class Routine extends Resource {
  // The description of the routine if defined.
  public Description?: string;

  /*
A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>--NOTE--: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.
*/
  public ReturnType?: string;

  /*
The type of routine.
Possible values are: `SCALAR_FUNCTION`, `PROCEDURE`, `TABLE_VALUED_FUNCTION`.
*/
  public RoutineType?: string;

  /*
Optional. If language is one of "PYTHON", "JAVA", "SCALA", this field stores the options for spark stored procedure.
Structure is documented below.
*/
  public SparkOptions?: RoutineSparkOptions;

  /*
The determinism level of the JavaScript UDF if defined.
Possible values are: `DETERMINISM_LEVEL_UNSPECIFIED`, `DETERMINISTIC`, `NOT_DETERMINISTIC`.
*/
  public DeterminismLevel?: string;

  /*
Remote function specific options.
Structure is documented below.
*/
  public RemoteFunctionOptions?: RoutineRemoteFunctionOptions;

  /*
Optional. If language = "JAVASCRIPT", this field stores the path of the
imported JAVASCRIPT libraries.
*/
  public ImportedLibraries?: Array<string>;

  /*
The time when this routine was modified, in milliseconds since the
epoch.
*/
  public LastModifiedTime?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
  public RoutineId?: string;

  /*
Input/output argument of a function or a stored procedure.
Structure is documented below.
*/
  public Arguments?: Array<RoutineArgument>;

  // The ID of the dataset containing this routine
  public DatasetId?: string;

  /*
The language of the routine.
Possible values are: `SQL`, `JAVASCRIPT`, `PYTHON`, `JAVA`, `SCALA`.
*/
  public Language?: string;

  /*
Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".
If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.
*/
  public ReturnTableType?: string;

  /*
The time when this routine was created, in milliseconds since the
epoch.
*/
  public CreationTime?: number;

  /*
The body of the routine. For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.


- - -
*/
  public DefinitionBody?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DefinitionBody",
        "The body of the routine. For functions, this is the expression in the AS clause.\nIf language=SQL, it is the substring inside (but excluding) the parentheses.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Arguments",
        "Input/output argument of a function or a stored procedure.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RoutineId",
        "The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SparkOptions",
        'Optional. If language is one of "PYTHON", "JAVA", "SCALA", this field stores the options for spark stored procedure.\nStructure is documented below.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the routine if defined.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RoutineType",
        "The type of routine.\nPossible values are: `SCALAR_FUNCTION`, `PROCEDURE`, `TABLE_VALUED_FUNCTION`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RemoteFunctionOptions",
        "Remote function specific options.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReturnType",
        'A JSON schema for the return type. Optional if language = "SQL"; required otherwise.\nIf absent, the return type is inferred from definitionBody at query time in each query\nthat references this routine. If present, then the evaluated result will be cast to\nthe specified returned type at query time. ~>**NOTE**: Because this field expects a JSON\nstring, any changes to the string will create a diff, even if the JSON itself hasn\'t\nchanged. If the API returns a different value for the same schema, e.g. it switche\nd the order of values or replaced STRUCT field type with RECORD field type, we currently\ncannot suppress the recurring diff this causes. As a workaround, we recommend using\nthe schema as returned by the API.',
      ),
      new DynamicUIProps(
        InputType.String,
        "DeterminismLevel",
        "The determinism level of the JavaScript UDF if defined.\nPossible values are: `DETERMINISM_LEVEL_UNSPECIFIED`, `DETERMINISTIC`, `NOT_DETERMINISTIC`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ImportedLibraries",
        'Optional. If language = "JAVASCRIPT", this field stores the path of the\nimported JAVASCRIPT libraries.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DatasetId",
        "The ID of the dataset containing this routine",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReturnTableType",
        'Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".\nIf absent, the return table type is inferred from definitionBody at query time in each query\nthat references this routine. If present, then the columns in the evaluated table result will\nbe cast to match the column types specificed in return table type, at query time.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Language",
        "The language of the routine.\nPossible values are: `SQL`, `JAVASCRIPT`, `PYTHON`, `JAVA`, `SCALA`.",
      ),
    ];
  }
}
