import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datasync_NfsLocationMountOptions,
  datasync_NfsLocationMountOptions_GetTypes,
} from "../types/datasync_NfsLocationMountOptions";
import {
  datasync_NfsLocationOnPremConfig,
  datasync_NfsLocationOnPremConfig_GetTypes,
} from "../types/datasync_NfsLocationOnPremConfig";

export interface NfsLocationArgs {
  // Specifies the IP address or DNS name of the NFS server. The DataSync Agent(s) use this to mount the NFS server.
  serverHostname?: string;

  // Subdirectory to perform actions as source or destination. Should be exported by the NFS server.
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block containing mount options used by DataSync to access the NFS Server.
  mountOptions?: datasync_NfsLocationMountOptions;

  // Configuration block containing information for connecting to the NFS File System.
  onPremConfig?: datasync_NfsLocationOnPremConfig;
}
export class NfsLocation extends DS_Resource {
  // Specifies the IP address or DNS name of the NFS server. The DataSync Agent(s) use this to mount the NFS server.
  public serverHostname?: string;

  // Subdirectory to perform actions as source or destination. Should be exported by the NFS server.
  public subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public uri?: string;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // Configuration block containing mount options used by DataSync to access the NFS Server.
  public mountOptions?: datasync_NfsLocationMountOptions;

  // Configuration block containing information for connecting to the NFS File System.
  public onPremConfig?: datasync_NfsLocationOnPremConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serverHostname",
        "Specifies the IP address or DNS name of the NFS server. The DataSync Agent(s) use this to mount the NFS server.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "Subdirectory to perform actions as source or destination. Should be exported by the NFS server.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Location. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mountOptions",
        "Configuration block containing mount options used by DataSync to access the NFS Server.",
        () => datasync_NfsLocationMountOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "onPremConfig",
        "Configuration block containing information for connecting to the NFS File System.",
        () => datasync_NfsLocationOnPremConfig_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
