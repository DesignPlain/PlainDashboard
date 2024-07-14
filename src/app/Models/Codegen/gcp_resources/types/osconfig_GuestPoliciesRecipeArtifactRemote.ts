import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface osconfig_GuestPoliciesRecipeArtifactRemote {
  /*
Must be provided if allowInsecure is false. SHA256 checksum in hex format, to compare to the checksum of the artifact.
If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any
of the steps.
*/
  checkSum?: string;

  // URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.
  uri?: string;
}

export function osconfig_GuestPoliciesRecipeArtifactRemote_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "checkSum",
      "Must be provided if allowInsecure is false. SHA256 checksum in hex format, to compare to the checksum of the artifact.\nIf the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any\nof the steps.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.",
      [],
      false,
      false,
    ),
  ];
}
