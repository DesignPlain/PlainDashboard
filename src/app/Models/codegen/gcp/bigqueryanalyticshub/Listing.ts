import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bigqueryanalyticshub_ListingRestrictedExportConfig,
  bigqueryanalyticshub_ListingRestrictedExportConfig_GetTypes,
} from '../types/bigqueryanalyticshub_ListingRestrictedExportConfig';
import {
  bigqueryanalyticshub_ListingPublisher,
  bigqueryanalyticshub_ListingPublisher_GetTypes,
} from '../types/bigqueryanalyticshub_ListingPublisher';
import {
  bigqueryanalyticshub_ListingDataProvider,
  bigqueryanalyticshub_ListingDataProvider_GetTypes,
} from '../types/bigqueryanalyticshub_ListingDataProvider';
import {
  bigqueryanalyticshub_ListingBigqueryDataset,
  bigqueryanalyticshub_ListingBigqueryDataset_GetTypes,
} from '../types/bigqueryanalyticshub_ListingBigqueryDataset';

export interface ListingArgs {
  /*
Details of the publisher who owns the listing and who can share the source data.
Structure is documented below.
*/
  publisher?: bigqueryanalyticshub_ListingPublisher;

  // Categories of the listing. Up to two categories are allowed.
  categories?: Array<string>;

  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  dataExchangeId?: string;

  // Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
  displayName?: string;

  // Base64 encoded image representing the listing.
  icon?: string;

  // Email or URL of the primary point of contact of the listing.
  primaryContact?: string;

  /*
Details of the data provider who owns the source data.
Structure is documented below.
*/
  dataProvider?: bigqueryanalyticshub_ListingDataProvider;

  // Email or URL of the request access of the listing. Subscribers can use this reference to request access.
  requestAccess?: string;

  // Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
  description?: string;

  // The name of the location this data exchange listing.
  location?: string;

  /*
Shared dataset i.e. BigQuery dataset source.
Structure is documented below.
*/
  bigqueryDataset?: bigqueryanalyticshub_ListingBigqueryDataset;

  // Documentation describing the listing.
  documentation?: string;

  // The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  listingId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
If set, restricted export configuration will be propagated and enforced on the linked dataset.
Structure is documented below.
*/
  restrictedExportConfig?: bigqueryanalyticshub_ListingRestrictedExportConfig;
}
export class Listing extends DS_Resource {
  /*
Shared dataset i.e. BigQuery dataset source.
Structure is documented below.
*/
  public bigqueryDataset?: bigqueryanalyticshub_ListingBigqueryDataset;

  // Categories of the listing. Up to two categories are allowed.
  public categories?: Array<string>;

  /*
Details of the publisher who owns the listing and who can share the source data.
Structure is documented below.
*/
  public publisher?: bigqueryanalyticshub_ListingPublisher;

  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  public dataExchangeId?: string;

  // Documentation describing the listing.
  public documentation?: string;

  // The name of the location this data exchange listing.
  public location?: string;

  // Email or URL of the primary point of contact of the listing.
  public primaryContact?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
If set, restricted export configuration will be propagated and enforced on the linked dataset.
Structure is documented below.
*/
  public restrictedExportConfig?: bigqueryanalyticshub_ListingRestrictedExportConfig;

  /*
Details of the data provider who owns the source data.
Structure is documented below.
*/
  public dataProvider?: bigqueryanalyticshub_ListingDataProvider;

  // Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
  public description?: string;

  // The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  public listingId?: string;

  // Name of the data provider.
  public name?: string;

  // Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
  public displayName?: string;

  // Base64 encoded image representing the listing.
  public icon?: string;

  // Email or URL of the request access of the listing. Subscribers can use this reference to request access.
  public requestAccess?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'dataExchangeId',
        'The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        "Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The name of the location this data exchange listing.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'documentation',
        'Documentation describing the listing.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'icon',
        'Base64 encoded image representing the listing.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'primaryContact',
        'Email or URL of the primary point of contact of the listing.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'listingId',
        'The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'categories',
        'Categories of the listing. Up to two categories are allowed.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'dataProvider',
        'Details of the data provider who owns the source data.\nStructure is documented below.',
        () => bigqueryanalyticshub_ListingDataProvider_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'requestAccess',
        'Email or URL of the request access of the listing. Subscribers can use this reference to request access.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'bigqueryDataset',
        'Shared dataset i.e. BigQuery dataset source.\nStructure is documented below.',
        () => bigqueryanalyticshub_ListingBigqueryDataset_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'restrictedExportConfig',
        'If set, restricted export configuration will be propagated and enforced on the linked dataset.\nStructure is documented below.',
        () => bigqueryanalyticshub_ListingRestrictedExportConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'publisher',
        'Details of the publisher who owns the listing and who can share the source data.\nStructure is documented below.',
        () => bigqueryanalyticshub_ListingPublisher_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).',
        () => [],
        false,
        false,
      ),
    ];
  }
}
