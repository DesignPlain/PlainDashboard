import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HostingReleaseArgs {
  /*
The type of the release; indicates what happened to the content of the site. There is no need to specify
`DEPLOY` or `ROLLBACK` type if a `version_name` is provided.
DEPLOY: A version was uploaded to Firebase Hosting and released. Output only.
ROLLBACK: The release points back to a previously deployed version. Output only.
SITE_DISABLE: The release prevents the site from serving content. Firebase Hosting acts as if the site never existed
Possible values are: `DEPLOY`, `ROLLBACK`, `SITE_DISABLE`.
*/
  type?: string;

  /*
The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID.
The content of the version specified will be actively displayed on the appropriate URL.
The Version must belong to the same site as in the `site_id`.
This parameter must be empty if the `type` of the release is `SITE_DISABLE`.
*/
  versionName?: string;

  /*
The ID of the channel to which the release belongs. If not provided, the release will
belong to the default "live" channel
*/
  channelId?: string;

  // The deploy description when the release was created. The value can be up to 512 characters.
  message?: string;

  /*
Required. The ID of the site to which the release belongs.


- - -
*/
  siteId?: string;
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
  public type?: string;

  /*
The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID.
The content of the version specified will be actively displayed on the appropriate URL.
The Version must belong to the same site as in the `site_id`.
This parameter must be empty if the `type` of the release is `SITE_DISABLE`.
*/
  public versionName?: string;

  /*
The ID of the channel to which the release belongs. If not provided, the release will
belong to the default "live" channel
*/
  public channelId?: string;

  // The deploy description when the release was created. The value can be up to 512 characters.
  public message?: string;

  /*
The unique identifier for the release, in either of the following formats:
sites/SITE_ID/releases/RELEASE_ID
sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID
*/
  public name?: string;

  // The unique identifier for the Release.
  public releaseId?: string;

  /*
Required. The ID of the site to which the release belongs.


- - -
*/
  public siteId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of the release; indicates what happened to the content of the site. There is no need to specify\n`DEPLOY` or `ROLLBACK` type if a `version_name` is provided.\nDEPLOY: A version was uploaded to Firebase Hosting and released. Output only.\nROLLBACK: The release points back to a previously deployed version. Output only.\nSITE_DISABLE: The release prevents the site from serving content. Firebase Hosting acts as if the site never existed\nPossible values are: `DEPLOY`, `ROLLBACK`, `SITE_DISABLE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionName",
        "The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID.\nThe content of the version specified will be actively displayed on the appropriate URL.\nThe Version must belong to the same site as in the `site_id`.\nThis parameter must be empty if the `type` of the release is `SITE_DISABLE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "channelId",
        'The ID of the channel to which the release belongs. If not provided, the release will\nbelong to the default "live" channel',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "message",
        "The deploy description when the release was created. The value can be up to 512 characters.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "siteId",
        "Required. The ID of the site to which the release belongs.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
