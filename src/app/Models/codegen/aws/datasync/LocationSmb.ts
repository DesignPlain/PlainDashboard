import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datasync_LocationSmbMountOptions,
  datasync_LocationSmbMountOptions_GetTypes,
} from "../types/datasync_LocationSmbMountOptions";

export interface LocationSmbArgs {
  // The password of the user who can mount the share and has file permissions in the SMB.
  password?: string;

  // Specifies the IP address or DNS name of the SMB server. The DataSync Agent(s) use this to mount the SMB share.
  serverHostname?: string;

  // Subdirectory to perform actions as source or destination. Should be exported by the NFS server.
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The user who can mount the share and has file and folder permissions in the SMB share.
  user?: string;

  // A list of DataSync Agent ARNs with which this location will be associated.
  agentArns?: Array<string>;

  // The name of the Windows domain the SMB server belongs to.
  domain?: string;

  // Configuration block containing mount options used by DataSync to access the SMB Server. Can be `AUTOMATIC`, `SMB2`, or `SMB3`.
  mountOptions?: datasync_LocationSmbMountOptions;
}
export class LocationSmb extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public uri?: string;

  // A list of DataSync Agent ARNs with which this location will be associated.
  public agentArns?: Array<string>;

  // The name of the Windows domain the SMB server belongs to.
  public domain?: string;

  // The password of the user who can mount the share and has file permissions in the SMB.
  public password?: string;

  // Specifies the IP address or DNS name of the SMB server. The DataSync Agent(s) use this to mount the SMB share.
  public serverHostname?: string;

  // Subdirectory to perform actions as source or destination. Should be exported by the NFS server.
  public subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The user who can mount the share and has file and folder permissions in the SMB share.
  public user?: string;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // Configuration block containing mount options used by DataSync to access the SMB Server. Can be `AUTOMATIC`, `SMB2`, or `SMB3`.
  public mountOptions?: datasync_LocationSmbMountOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "password",
        "The password of the user who can mount the share and has file permissions in the SMB.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverHostname",
        "Specifies the IP address or DNS name of the SMB server. The DataSync Agent(s) use this to mount the SMB share.",
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
        "Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "user",
        "The user who can mount the share and has file and folder permissions in the SMB share.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "agentArns",
        "A list of DataSync Agent ARNs with which this location will be associated.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The name of the Windows domain the SMB server belongs to.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mountOptions",
        "Configuration block containing mount options used by DataSync to access the SMB Server. Can be `AUTOMATIC`, `SMB2`, or `SMB3`.",
        () => datasync_LocationSmbMountOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
