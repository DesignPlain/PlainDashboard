import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ListingBigqueryDataset } from "../types/ListingBigqueryDataset";
import { ListingDataProvider } from "../types/ListingDataProvider";
import { ListingPublisher } from "../types/ListingPublisher";
import { ListingRestrictedExportConfig } from "../types/ListingRestrictedExportConfig";

export interface ListingArgs {
  /*
Details of the publisher who owns the listing and who can share the source data.
Structure is documented below.
*/
  Publisher?: ListingPublisher;

  /*
If set, restricted export configuration will be propagated and enforced on the linked dataset.
Structure is documented below.
*/
  RestrictedExportConfig?: ListingRestrictedExportConfig;

  // Base64 encoded image representing the listing.
  Icon?: string;

  // The name of the location this data exchange listing.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
  Description?: string;

  // The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  ListingId?: string;

  /*
Shared dataset i.e. BigQuery dataset source.
Structure is documented below.
*/
  BigqueryDataset?: ListingBigqueryDataset;

  // Documentation describing the listing.
  Documentation?: string;

  // Email or URL of the primary point of contact of the listing.
  PrimaryContact?: string;

  // Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
  DisplayName?: string;

  // Email or URL of the request access of the listing. Subscribers can use this reference to request access.
  RequestAccess?: string;

  // Categories of the listing. Up to two categories are allowed.
  Categories?: Array<string>;

  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  DataExchangeId?: string;

  /*
Details of the data provider who owns the source data.
Structure is documented below.
*/
  DataProvider?: ListingDataProvider;
}
export class Listing extends Resource {
  // Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
  public Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Details of the publisher who owns the listing and who can share the source data.
Structure is documented below.
*/
  public Publisher?: ListingPublisher;

  // Categories of the listing. Up to two categories are allowed.
  public Categories?: Array<string>;

  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  public DataExchangeId?: string;

  /*
If set, restricted export configuration will be propagated and enforced on the linked dataset.
Structure is documented below.
*/
  public RestrictedExportConfig?: ListingRestrictedExportConfig;

  /*
Details of the data provider who owns the source data.
Structure is documented below.
*/
  public DataProvider?: ListingDataProvider;

  // The name of the location this data exchange listing.
  public Location?: string;

  // Documentation describing the listing.
  public Documentation?: string;

  // The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  public ListingId?: string;

  // Name of the data provider.
  public Name?: string;

  // Email or URL of the primary point of contact of the listing.
  public PrimaryContact?: string;

  // Email or URL of the request access of the listing. Subscribers can use this reference to request access.
  public RequestAccess?: string;

  /*
Shared dataset i.e. BigQuery dataset source.
Structure is documented below.
*/
  public BigqueryDataset?: ListingBigqueryDataset;

  // Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
  public DisplayName?: string;

  // Base64 encoded image representing the listing.
  public Icon?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this data exchange listing.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ListingId",
        "The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BigqueryDataset",
        "Shared dataset i.e. BigQuery dataset source.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PrimaryContact",
        "Email or URL of the primary point of contact of the listing.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataExchangeId",
        "The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Publisher",
        "Details of the publisher who owns the listing and who can share the source data.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Icon",
        "Base64 encoded image representing the listing.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Categories",
        "Categories of the listing. Up to two categories are allowed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RestrictedExportConfig",
        "If set, restricted export configuration will be propagated and enforced on the linked dataset.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Documentation",
        "Documentation describing the listing.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RequestAccess",
        "Email or URL of the request access of the listing. Subscribers can use this reference to request access.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataProvider",
        "Details of the data provider who owns the source data.\nStructure is documented below.",
      ),
    ];
  }
}
