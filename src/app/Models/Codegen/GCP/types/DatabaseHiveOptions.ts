export interface DatabaseHiveOptions {
  // Cloud Storage folder URI where the database data is stored, starting with "gs://".
  LocationUri?: string;

  /*
Stores user supplied Hive database parameters. An object containing a
list of"key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

- - -
*/
  Parameters?: Map<string, string>;
}
