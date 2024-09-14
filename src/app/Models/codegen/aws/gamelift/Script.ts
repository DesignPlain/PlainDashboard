import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gamelift_ScriptStorageLocation,
  gamelift_ScriptStorageLocation_GetTypes,
} from "../types/gamelift_ScriptStorageLocation";

export interface ScriptArgs {
  // Information indicating where your game script files are stored. See below.
  storageLocation?: gamelift_ScriptStorageLocation;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Version that is associated with this script.
  version?: string;

  // A data object containing your Realtime scripts and dependencies as a zip  file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB.
  zipFile?: string;

  // Name of the script
  name?: string;
}
export class Script extends DS_Resource {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Version that is associated with this script.
  public version?: string;

  // A data object containing your Realtime scripts and dependencies as a zip  file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB.
  public zipFile?: string;

  // GameLift Script ARN.
  public arn?: string;

  // Name of the script
  public name?: string;

  // Information indicating where your game script files are stored. See below.
  public storageLocation?: gamelift_ScriptStorageLocation;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "storageLocation",
        "Information indicating where your game script files are stored. See below.",
        () => gamelift_ScriptStorageLocation_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Version that is associated with this script.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "zipFile",
        "A data object containing your Realtime scripts and dependencies as a zip  file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the script",
        () => [],
        false,
        false,
      ),
    ];
  }
}
