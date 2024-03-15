import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FolderFeedCondition } from "../types/FolderFeedCondition";
import { FolderFeedFeedOutputConfig } from "../types/FolderFeedFeedOutputConfig";

export interface FolderFeedArgs {
  // This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
  FeedId?: string;

  /*
Output configuration for asset feed destination.
Structure is documented below.
*/
  FeedOutputConfig?: FolderFeedFeedOutputConfig;

  // The folder this feed should be created in.
  Folder?: string;

  /*
A list of the full names of the assets to receive updates. You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
*/
  AssetNames?: Array<string>;

  /*
A list of types of the assets to receive updates. You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.
*/
  AssetTypes?: Array<string>;

  /*
The project whose identity will be used when sending messages to the
destination pubsub topic. It also specifies the project for API
enablement check, quota, and billing.
*/
  BillingProject?: string;

  /*
A condition which determines whether an asset update should be published. If specified, an asset
will be returned only when the expression evaluates to true. When set, expression field
must be a valid CEL expression on a TemporalAsset with name temporal_asset. Example: a Feed with
expression "temporal_asset.deleted == true" will only publish Asset deletions. Other fields of
condition are optional.
Structure is documented below.
*/
  Condition?: FolderFeedCondition;

  /*
Asset content type. If not specified, no content but the asset name and type will be returned.
Possible values are: `CONTENT_TYPE_UNSPECIFIED`, `RESOURCE`, `IAM_POLICY`, `ORG_POLICY`, `OS_INVENTORY`, `ACCESS_POLICY`.
*/
  ContentType?: string;
}
export class FolderFeed extends Resource {
  // The folder this feed should be created in.
  public Folder?: string;

  /*
A list of the full names of the assets to receive updates. You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
*/
  public AssetNames?: Array<string>;

  /*
A list of types of the assets to receive updates. You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.
*/
  public AssetTypes?: Array<string>;

  /*
The project whose identity will be used when sending messages to the
destination pubsub topic. It also specifies the project for API
enablement check, quota, and billing.
*/
  public BillingProject?: string;

  /*
A condition which determines whether an asset update should be published. If specified, an asset
will be returned only when the expression evaluates to true. When set, expression field
must be a valid CEL expression on a TemporalAsset with name temporal_asset. Example: a Feed with
expression "temporal_asset.deleted == true" will only publish Asset deletions. Other fields of
condition are optional.
Structure is documented below.
*/
  public Condition?: FolderFeedCondition;

  /*
Asset content type. If not specified, no content but the asset name and type will be returned.
Possible values are: `CONTENT_TYPE_UNSPECIFIED`, `RESOURCE`, `IAM_POLICY`, `ORG_POLICY`, `OS_INVENTORY`, `ACCESS_POLICY`.
*/
  public ContentType?: string;

  // This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
  public FeedId?: string;

  /*
Output configuration for asset feed destination.
Structure is documented below.
*/
  public FeedOutputConfig?: FolderFeedFeedOutputConfig;

  /*
The ID of the folder where this feed has been created. Both [FOLDER_NUMBER]
and folders/[FOLDER_NUMBER] are accepted.
*/
  public FolderId?: string;

  // The format will be folders/{folder_number}/feeds/{client-assigned_feed_identifier}.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "The folder this feed should be created in.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "AssetNames",
        "A list of the full names of the assets to receive updates. You must specify either or both of\nassetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are\nexported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.\nSee https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "AssetTypes",
        'A list of types of the assets to receive updates. You must specify either or both of assetNames\nand assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to\nthe feed. For example: "compute.googleapis.com/Disk"\nSee https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all\nsupported asset types.',
      ),
      new DynamicUIProps(
        InputType.String,
        "BillingProject",
        "The project whose identity will be used when sending messages to the\ndestination pubsub topic. It also specifies the project for API\nenablement check, quota, and billing.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Condition",
        'A condition which determines whether an asset update should be published. If specified, an asset\nwill be returned only when the expression evaluates to true. When set, expression field\nmust be a valid CEL expression on a TemporalAsset with name temporal_asset. Example: a Feed with\nexpression "temporal_asset.deleted == true" will only publish Asset deletions. Other fields of\ncondition are optional.\nStructure is documented below.',
      ),
      new DynamicUIProps(
        InputType.String,
        "ContentType",
        "Asset content type. If not specified, no content but the asset name and type will be returned.\nPossible values are: `CONTENT_TYPE_UNSPECIFIED`, `RESOURCE`, `IAM_POLICY`, `ORG_POLICY`, `OS_INVENTORY`, `ACCESS_POLICY`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FeedId",
        "This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FeedOutputConfig",
        "Output configuration for asset feed destination.\nStructure is documented below.",
      ),
    ];
  }
}