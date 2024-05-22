import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gamelift_BuildStorageLocation,
  gamelift_BuildStorageLocation_GetTypes,
} from "../types/gamelift_BuildStorageLocation";

export interface BuildArgs {
  // Name of the build
  name?: string;

  // Operating system that the game server binaries are built to run on. Valid values: `WINDOWS_2012`, `AMAZON_LINUX`, `AMAZON_LINUX_2`, `WINDOWS_2016`, `AMAZON_LINUX_2023`.
  operatingSystem?: string;

  // Information indicating where your game build files are stored. See below.
  storageLocation?: gamelift_BuildStorageLocation;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Version that is associated with this build.
  version?: string;
}
export class Build extends Resource {
  // Information indicating where your game build files are stored. See below.
  public storageLocation?: gamelift_BuildStorageLocation;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Version that is associated with this build.
  public version?: string;

  // GameLift Build ARN.
  public arn?: string;

  // Name of the build
  public name?: string;

  // Operating system that the game server binaries are built to run on. Valid values: `WINDOWS_2012`, `AMAZON_LINUX`, `AMAZON_LINUX_2`, `WINDOWS_2016`, `AMAZON_LINUX_2023`.
  public operatingSystem?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the build",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "operatingSystem",
        "Operating system that the game server binaries are built to run on. Valid values: `WINDOWS_2012`, `AMAZON_LINUX`, `AMAZON_LINUX_2`, `WINDOWS_2016`, `AMAZON_LINUX_2023`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "storageLocation",
        "Information indicating where your game build files are stored. See below.",
        gamelift_BuildStorageLocation_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Version that is associated with this build.",
        [],
        false,
        false,
      ),
    ];
  }
}
