import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamDestinationConfigGcsDestinationConfig,
  Datastream_StreamDestinationConfigGcsDestinationConfig_GetTypes,
} from "./Datastream_StreamDestinationConfigGcsDestinationConfig";
import {
  Datastream_StreamDestinationConfigBigqueryDestinationConfig,
  Datastream_StreamDestinationConfigBigqueryDestinationConfig_GetTypes,
} from "./Datastream_StreamDestinationConfigBigqueryDestinationConfig";

export interface Datastream_StreamDestinationConfig {
  /*
A configuration for how data should be loaded to Cloud Storage.
Structure is documented below.
*/
  GcsDestinationConfig?: Datastream_StreamDestinationConfigGcsDestinationConfig;

  /*
A configuration for how data should be loaded to Cloud Storage.
Structure is documented below.
*/
  BigqueryDestinationConfig?: Datastream_StreamDestinationConfigBigqueryDestinationConfig;

  // Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  DestinationConnectionProfile?: string;
}

export function Datastream_StreamDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GcsDestinationConfig",
      "A configuration for how data should be loaded to Cloud Storage.\nStructure is documented below.",
      Datastream_StreamDestinationConfigGcsDestinationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BigqueryDestinationConfig",
      "A configuration for how data should be loaded to Cloud Storage.\nStructure is documented below.",
      Datastream_StreamDestinationConfigBigqueryDestinationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DestinationConnectionProfile",
      "Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}",
      [],
      true,
      true,
    ),
  ];
}
