import { StreamDestinationConfigGcsDestinationConfigAvroFileFormat } from "./StreamDestinationConfigGcsDestinationConfigAvroFileFormat";
import { StreamDestinationConfigGcsDestinationConfigJsonFileFormat } from "./StreamDestinationConfigGcsDestinationConfigJsonFileFormat";

export interface StreamDestinationConfigGcsDestinationConfig {
  // AVRO file format configuration.
  AvroFileFormat?: StreamDestinationConfigGcsDestinationConfigAvroFileFormat;

  /*
The maximum duration for which new events are added before a file is closed and a new file is created.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
*/
  FileRotationInterval?: string;

  // The maximum file size to be saved in the bucket.
  FileRotationMb?: number;

  /*
JSON file format configuration.
Structure is documented below.
*/
  JsonFileFormat?: StreamDestinationConfigGcsDestinationConfigJsonFileFormat;

  // Path inside the Cloud Storage bucket to write data to.
  Path?: string;
}
