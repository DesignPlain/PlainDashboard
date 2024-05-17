import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GoogleChannelConfigArgs {
  /*
Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`.



- - -
*/
  Name?: string;

  // The project for the resource
  Project?: string;

  // Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/-/locations/-/keyRings/-/cryptoKeys/-`.
  CryptoKeyName?: string;

  // The location for the resource
  Location?: string;
}
export class GoogleChannelConfig extends Resource {
  // The project for the resource
  public Project?: string;

  // Output only. The last-modified time.
  public UpdateTime?: string;

  // Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/-/locations/-/keyRings/-/cryptoKeys/-`.
  public CryptoKeyName?: string;

  // The location for the resource
  public Location?: string;

  /*
Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`.



- - -
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`.\n\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "CryptoKeyName",
        "Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/*/locations/*/keyRings/*/cryptoKeys/*`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
    ];
  }
}
