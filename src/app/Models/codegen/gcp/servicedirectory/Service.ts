import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ServiceArgs {
  /*
Metadata for the service. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 2000 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.
*/
  metadata?: Map<string, string>;

  // The resource name of the namespace this service will belong to.
  namespace?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  serviceId?: string;
}
export class Service extends DS_Resource {
  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  public serviceId?: string;

  /*
Metadata for the service. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 2000 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.
*/
  public metadata?: Map<string, string>;

  /*
The resource name for the service in the
format `projects/-/locations/-/namespaces/-/services/-`.
*/
  public name?: string;

  // The resource name of the namespace this service will belong to.
  public namespace?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "Metadata for the service. This data can be consumed\nby service clients. The entire metadata dictionary may contain\nup to 2000 characters, spread across all key-value pairs.\nMetadata that goes beyond any these limits will be rejected.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespace",
        "The resource name of the namespace this service will belong to.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceId",
        "The Resource ID must be 1-63 characters long, including digits,\nlowercase letters or the hyphen character.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
