import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DataExchangeArgs {
  /*
Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.


- - -
*/
  DisplayName?: string;

  // Documentation describing the data exchange.
  Documentation?: string;

  // Base64 encoded image representing the data exchange.
  Icon?: string;

  // The name of the location this data exchange.
  Location?: string;

  // Email or URL of the primary point of contact of the data exchange.
  PrimaryContact?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  DataExchangeId?: string;

  // Description of the data exchange.
  Description?: string;
}
export class DataExchange extends Resource {
  // The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  public DataExchangeId?: string;

  // Description of the data exchange.
  public Description?: string;

  // Documentation describing the data exchange.
  public Documentation?: string;

  // Number of listings contained in the data exchange.
  public ListingCount?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.


- - -
*/
  public DisplayName?: string;

  // Base64 encoded image representing the data exchange.
  public Icon?: string;

  // The name of the location this data exchange.
  public Location?: string;

  /*
The resource name of the data exchange, for example:
"projects/myproject/locations/US/dataExchanges/123"
*/
  public Name?: string;

  // Email or URL of the primary point of contact of the data exchange.
  public PrimaryContact?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Documentation",
        "Documentation describing the data exchange.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Icon",
        "Base64 encoded image representing the data exchange.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this data exchange.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PrimaryContact",
        "Email or URL of the primary point of contact of the data exchange.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataExchangeId",
        "The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the data exchange.",
      ),
    ];
  }
}
