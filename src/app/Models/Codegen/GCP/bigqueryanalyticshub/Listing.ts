import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigqueryanalyticshub_ListingRestrictedExportConfig,
  Bigqueryanalyticshub_ListingRestrictedExportConfig_GetTypes,
} from "../types/Bigqueryanalyticshub_ListingRestrictedExportConfig";
import {
  Bigqueryanalyticshub_ListingBigqueryDataset,
  Bigqueryanalyticshub_ListingBigqueryDataset_GetTypes,
} from "../types/Bigqueryanalyticshub_ListingBigqueryDataset";
import {
  Bigqueryanalyticshub_ListingDataProvider,
  Bigqueryanalyticshub_ListingDataProvider_GetTypes,
} from "../types/Bigqueryanalyticshub_ListingDataProvider";
import {
  Bigqueryanalyticshub_ListingPublisher,
  Bigqueryanalyticshub_ListingPublisher_GetTypes,
} from "../types/Bigqueryanalyticshub_ListingPublisher";

export interface ListingArgs {
  // Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
  Description?: string;

  // Documentation describing the listing.
  Documentation?: string;

  /*
If set, restricted export configuration will be propagated and enforced on the linked dataset.
Structure is documented below.
*/
  RestrictedExportConfig?: Bigqueryanalyticshub_ListingRestrictedExportConfig;

  // Categories of the listing. Up to two categories are allowed.
  Categories?: Array<string>;

  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  DataExchangeId?: string;

  // Base64 encoded image representing the listing.
  Icon?: string;

  // The name of the location this data exchange listing.
  Location?: string;

  /*
Shared dataset i.e. BigQuery dataset source.
Structure is documented below.
*/
  BigqueryDataset?: Bigqueryanalyticshub_ListingBigqueryDataset;

  /*
Details of the data provider who owns the source data.
Structure is documented below.
*/
  DataProvider?: Bigqueryanalyticshub_ListingDataProvider;

  // The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  ListingId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
  DisplayName?: string;

  // Email or URL of the primary point of contact of the listing.
  PrimaryContact?: string;

  /*
Details of the publisher who owns the listing and who can share the source data.
Structure is documented below.
*/
  Publisher?: Bigqueryanalyticshub_ListingPublisher;

  // Email or URL of the request access of the listing. Subscribers can use this reference to request access.
  RequestAccess?: string;
}
export class Listing extends Resource {
  /*
Details of the data provider who owns the source data.
Structure is documented below.
*/
  public DataProvider?: Bigqueryanalyticshub_ListingDataProvider;

  // Base64 encoded image representing the listing.
  public Icon?: string;

  // Email or URL of the primary point of contact of the listing.
  public PrimaryContact?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
If set, restricted export configuration will be propagated and enforced on the linked dataset.
Structure is documented below.
*/
  public RestrictedExportConfig?: Bigqueryanalyticshub_ListingRestrictedExportConfig;

  // Documentation describing the listing.
  public Documentation?: string;

  // The name of the location this data exchange listing.
  public Location?: string;

  /*
Details of the publisher who owns the listing and who can share the source data.
Structure is documented below.
*/
  public Publisher?: Bigqueryanalyticshub_ListingPublisher;

  // Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
  public Description?: string;

  // Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
  public DisplayName?: string;

  // The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  public ListingId?: string;

  /*
Shared dataset i.e. BigQuery dataset source.
Structure is documented below.
*/
  public BigqueryDataset?: Bigqueryanalyticshub_ListingBigqueryDataset;

  // Categories of the listing. Up to two categories are allowed.
  public Categories?: Array<string>;

  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  public DataExchangeId?: string;

  // Name of the data provider.
  public Name?: string;

  // Email or URL of the request access of the listing. Subscribers can use this reference to request access.
  public RequestAccess?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PrimaryContact",
        "Email or URL of the primary point of contact of the listing.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Publisher",
        "Details of the publisher who owns the listing and who can share the source data.\nStructure is documented below.",
        Bigqueryanalyticshub_ListingPublisher_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Categories",
        "Categories of the listing. Up to two categories are allowed.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Icon",
        "Base64 encoded image representing the listing.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this data exchange listing.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ListingId",
        "The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Documentation",
        "Documentation describing the listing.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DataProvider",
        "Details of the data provider who owns the source data.\nStructure is documented below.",
        Bigqueryanalyticshub_ListingDataProvider_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "RequestAccess",
        "Email or URL of the request access of the listing. Subscribers can use this reference to request access.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RestrictedExportConfig",
        "If set, restricted export configuration will be propagated and enforced on the linked dataset.\nStructure is documented below.",
        Bigqueryanalyticshub_ListingRestrictedExportConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DataExchangeId",
        "The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BigqueryDataset",
        "Shared dataset i.e. BigQuery dataset source.\nStructure is documented below.",
        Bigqueryanalyticshub_ListingBigqueryDataset_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
