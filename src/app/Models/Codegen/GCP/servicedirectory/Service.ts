import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ServiceArgs {
  /*
Metadata for the service. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 2000 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.
*/
  Metadata?: Map<string, string>;

  // The resource name of the namespace this service will belong to.
  Namespace?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  ServiceId?: string;
}
export class Service extends Resource {
  // The resource name of the namespace this service will belong to.
  public Namespace?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  public ServiceId?: string;

  /*
Metadata for the service. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 2000 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.
*/
  public Metadata?: Map<string, string>;

  /*
The resource name for the service in the
format `projects/-/locations/-/namespaces/-/services/-`.
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "Metadata for the service. This data can be consumed\nby service clients. The entire metadata dictionary may contain\nup to 2000 characters, spread across all key-value pairs.\nMetadata that goes beyond any these limits will be rejected.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Namespace",
        "The resource name of the namespace this service will belong to.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceId",
        "The Resource ID must be 1-63 characters long, including digits,\nlowercase letters or the hyphen character.\n\n\n- - -",
      ),
    ];
  }
}
