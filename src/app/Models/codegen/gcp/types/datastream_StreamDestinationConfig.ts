import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datastream_StreamDestinationConfigGcsDestinationConfig,
  datastream_StreamDestinationConfigGcsDestinationConfig_GetTypes,
} from "./datastream_StreamDestinationConfigGcsDestinationConfig";
import {
  datastream_StreamDestinationConfigBigqueryDestinationConfig,
  datastream_StreamDestinationConfigBigqueryDestinationConfig_GetTypes,
} from "./datastream_StreamDestinationConfigBigqueryDestinationConfig";

export interface datastream_StreamDestinationConfig {
  // Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  destinationConnectionProfile?: string;

  /*
A configuration for how data should be loaded to Cloud Storage.
Structure is documented below.
*/
  gcsDestinationConfig?: datastream_StreamDestinationConfigGcsDestinationConfig;

  /*
A configuration for how data should be loaded to Cloud Storage.
Structure is documented below.
*/
  bigqueryDestinationConfig?: datastream_StreamDestinationConfigBigqueryDestinationConfig;
}

export function datastream_StreamDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationConnectionProfile",
      "Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcsDestinationConfig",
      "A configuration for how data should be loaded to Cloud Storage.\nStructure is documented below.",
      () => datastream_StreamDestinationConfigGcsDestinationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "bigqueryDestinationConfig",
      "A configuration for how data should be loaded to Cloud Storage.\nStructure is documented below.",
      () =>
        datastream_StreamDestinationConfigBigqueryDestinationConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
