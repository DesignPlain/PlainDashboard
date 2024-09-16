import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DataExchangeArgs {
  /*
Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.


- - -
*/
  displayName?: string;

  // Documentation describing the data exchange.
  documentation?: string;

  // Base64 encoded image representing the data exchange.
  icon?: string;

  // The name of the location this data exchange.
  location?: string;

  // Email or URL of the primary point of contact of the data exchange.
  primaryContact?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  dataExchangeId?: string;

  // Description of the data exchange.
  description?: string;
}
export class DataExchange extends DS_Resource {
  // Documentation describing the data exchange.
  public documentation?: string;

  // Base64 encoded image representing the data exchange.
  public icon?: string;

  // Number of listings contained in the data exchange.
  public listingCount?: number;

  // The name of the location this data exchange.
  public location?: string;

  /*
The resource name of the data exchange, for example:
"projects/myproject/locations/US/dataExchanges/123"
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Description of the data exchange.
  public description?: string;

  /*
Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.


- - -
*/
  public displayName?: string;

  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  public dataExchangeId?: string;

  // Email or URL of the primary point of contact of the data exchange.
  public primaryContact?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
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
        'description',
        'Description of the data exchange.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'documentation',
        'Documentation describing the data exchange.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'icon',
        'Base64 encoded image representing the data exchange.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The name of the location this data exchange.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'primaryContact',
        'Email or URL of the primary point of contact of the data exchange.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
