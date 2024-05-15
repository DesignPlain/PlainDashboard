import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat,
  Datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat_GetTypes,
} from "./Datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat";
import {
  Datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat,
  Datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat_GetTypes,
} from "./Datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat";

export interface Datastream_StreamDestinationConfigGcsDestinationConfig {
  // AVRO file format configuration.
  AvroFileFormat?: Datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat;

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
  JsonFileFormat?: Datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat;

  // Path inside the Cloud Storage bucket to write data to.
  Path?: string;
}

export function Datastream_StreamDestinationConfigGcsDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "FileRotationMb",
      "The maximum file size to be saved in the bucket.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "JsonFileFormat",
      "JSON file format configuration.\nStructure is documented below.",
      Datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path inside the Cloud Storage bucket to write data to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AvroFileFormat",
      "AVRO file format configuration.",
      Datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FileRotationInterval",
      "The maximum duration for which new events are added before a file is closed and a new file is created.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\". Defaults to 900s.",
      [],
      false,
      false,
    ),
  ];
}
