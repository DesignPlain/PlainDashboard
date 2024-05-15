import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote {
  // SHA256 checksum of the remote file.
  Sha256Checksum?: string;

  /*
URI from which to fetch the object. It should contain
both the protocol and path following the format `{protocol}://{location}`.
*/
  Uri?: string;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceRemote_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Sha256Checksum",
      "SHA256 checksum of the remote file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "URI from which to fetch the object. It should contain\nboth the protocol and path following the format `{protocol}://{location}`.",
      [],
      true,
      false,
    ),
  ];
}
