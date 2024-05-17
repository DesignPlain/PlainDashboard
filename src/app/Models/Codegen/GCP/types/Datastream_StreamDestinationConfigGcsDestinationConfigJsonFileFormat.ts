import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat {
  /*
Compression of the loaded JSON file.
Possible values are: `NO_COMPRESSION`, `GZIP`.
*/
  Compression?: string;

  /*
The schema file format along JSON data files.
Possible values are: `NO_SCHEMA_FILE`, `AVRO_SCHEMA_FILE`.
*/
  SchemaFileFormat?: string;
}

export function Datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Compression",
      "Compression of the loaded JSON file.\nPossible values are: `NO_COMPRESSION`, `GZIP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SchemaFileFormat",
      "The schema file format along JSON data files.\nPossible values are: `NO_SCHEMA_FILE`, `AVRO_SCHEMA_FILE`.",
      [],
      false,
      false,
    ),
  ];
}
