import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSourceRemote {
  // SHA256 checksum of the remote file.
  sha256Checksum?: string;

  /*
URI from which to fetch the object. It should contain
both the protocol and path following the format `{protocol}://{location}`.
*/
  uri?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSourceRemote_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sha256Checksum",
      "SHA256 checksum of the remote file.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "URI from which to fetch the object. It should contain\nboth the protocol and path following the format `{protocol}://{location}`.",
      () => [],
      true,
      false,
    ),
  ];
}
