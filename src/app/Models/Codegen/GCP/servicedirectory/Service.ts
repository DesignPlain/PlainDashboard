import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
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

  // The resource name of the namespace this service will belong to.
  public Namespace?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  public ServiceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "Metadata",
        "Metadata for the service. This data can be consumed\nby service clients. The entire metadata dictionary may contain\nup to 2000 characters, spread across all key-value pairs.\nMetadata that goes beyond any these limits will be rejected.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Namespace",
        "The resource name of the namespace this service will belong to.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceId",
        "The Resource ID must be 1-63 characters long, including digits,\nlowercase letters or the hyphen character.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
