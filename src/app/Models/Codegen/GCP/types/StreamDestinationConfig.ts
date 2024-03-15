import { StreamDestinationConfigGcsDestinationConfig } from "./StreamDestinationConfigGcsDestinationConfig";
import { StreamDestinationConfigBigqueryDestinationConfig } from "./StreamDestinationConfigBigqueryDestinationConfig";

export interface StreamDestinationConfig {
  // Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  DestinationConnectionProfile?: string;

  /*
A configuration for how data should be loaded to Cloud Storage.
Structure is documented below.
*/
  GcsDestinationConfig?: StreamDestinationConfigGcsDestinationConfig;

  /*
A configuration for how data should be loaded to Cloud Storage.
Structure is documented below.
*/
  BigqueryDestinationConfig?: StreamDestinationConfigBigqueryDestinationConfig;
}
