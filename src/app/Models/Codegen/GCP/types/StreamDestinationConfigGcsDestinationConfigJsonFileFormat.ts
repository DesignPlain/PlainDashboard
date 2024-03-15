export interface StreamDestinationConfigGcsDestinationConfigJsonFileFormat {
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
