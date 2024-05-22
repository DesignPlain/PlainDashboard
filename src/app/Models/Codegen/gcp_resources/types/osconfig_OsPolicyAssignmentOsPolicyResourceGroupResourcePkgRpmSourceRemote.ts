import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote {
  // SHA256 checksum of the remote file.
  sha256Checksum?: string;

  /*
URI from which to fetch the object. It should contain
both the protocol and path following the format `{protocol}://{location}`.
*/
  uri?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sha256Checksum",
      "SHA256 checksum of the remote file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "URI from which to fetch the object. It should contain\nboth the protocol and path following the format `{protocol}://{location}`.",
      [],
      true,
      false,
    ),
  ];
}
