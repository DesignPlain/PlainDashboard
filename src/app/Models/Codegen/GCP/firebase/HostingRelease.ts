import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HostingReleaseArgs {
  /*
The ID of the channel to which the release belongs. If not provided, the release will
belong to the default "live" channel
*/
  ChannelId?: string;

  // The deploy description when the release was created. The value can be up to 512 characters.
  Message?: string;

  /*
Required. The ID of the site to which the release belongs.


- - -
*/
  SiteId?: string;

  /*
The type of the release; indicates what happened to the content of the site. There is no need to specify
`DEPLOY` or `ROLLBACK` type if a `version_name` is provided.
DEPLOY: A version was uploaded to Firebase Hosting and released. Output only.
ROLLBACK: The release points back to a previously deployed version. Output only.
SITE_DISABLE: The release prevents the site from serving content. Firebase Hosting acts as if the site never existed
Possible values are: `DEPLOY`, `ROLLBACK`, `SITE_DISABLE`.
*/
  Type?: string;

  /*
The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID.
The content of the version specified will be actively displayed on the appropriate URL.
The Version must belong to the same site as in the `site_id`.
This parameter must be empty if the `type` of the release is `SITE_DISABLE`.
*/
  VersionName?: string;
}
export class HostingRelease extends Resource {
  /*
The type of the release; indicates what happened to the content of the site. There is no need to specify
`DEPLOY` or `ROLLBACK` type if a `version_name` is provided.
DEPLOY: A version was uploaded to Firebase Hosting and released. Output only.
ROLLBACK: The release points back to a previously deployed version. Output only.
SITE_DISABLE: The release prevents the site from serving content. Firebase Hosting acts as if the site never existed
Possible values are: `DEPLOY`, `ROLLBACK`, `SITE_DISABLE`.
*/
  public Type?: string;

  /*
The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID.
The content of the version specified will be actively displayed on the appropriate URL.
The Version must belong to the same site as in the `site_id`.
This parameter must be empty if the `type` of the release is `SITE_DISABLE`.
*/
  public VersionName?: string;

  /*
The ID of the channel to which the release belongs. If not provided, the release will
belong to the default "live" channel
*/
  public ChannelId?: string;

  // The deploy description when the release was created. The value can be up to 512 characters.
  public Message?: string;

  /*
The unique identifier for the release, in either of the following formats:
sites/SITE_ID/releases/RELEASE_ID
sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID
*/
  public Name?: string;

  // The unique identifier for the Release.
  public ReleaseId?: string;

  /*
Required. The ID of the site to which the release belongs.


- - -
*/
  public SiteId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ChannelId",
        'The ID of the channel to which the release belongs. If not provided, the release will\nbelong to the default "live" channel',
      ),
      new DynamicUIProps(
        InputType.String,
        "Message",
        "The deploy description when the release was created. The value can be up to 512 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SiteId",
        "Required. The ID of the site to which the release belongs.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of the release; indicates what happened to the content of the site. There is no need to specify\n`DEPLOY` or `ROLLBACK` type if a `version_name` is provided.\nDEPLOY: A version was uploaded to Firebase Hosting and released. Output only.\nROLLBACK: The release points back to a previously deployed version. Output only.\nSITE_DISABLE: The release prevents the site from serving content. Firebase Hosting acts as if the site never existed\nPossible values are: `DEPLOY`, `ROLLBACK`, `SITE_DISABLE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VersionName",
        "The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID.\nThe content of the version specified will be actively displayed on the appropriate URL.\nThe Version must belong to the same site as in the `site_id`.\nThis parameter must be empty if the `type` of the release is `SITE_DISABLE`.",
      ),
    ];
  }
}
