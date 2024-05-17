import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_DomainMappingSslSettings,
  Appengine_DomainMappingSslSettings_GetTypes,
} from "../types/Appengine_DomainMappingSslSettings";
import {
  Appengine_DomainMappingResourceRecord,
  Appengine_DomainMappingResourceRecord_GetTypes,
} from "../types/Appengine_DomainMappingResourceRecord";

export interface DomainMappingArgs {
  /*
Relative name of the domain serving the application. Example: example.com.


- - -
*/
  DomainName?: string;

  /*
Whether the domain creation should override any existing mappings for this domain.
By default, overrides are rejected.
Default value is `STRICT`.
Possible values are: `STRICT`, `OVERRIDE`.
*/
  OverrideStrategy?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
Structure is documented below.
*/
  SslSettings?: Appengine_DomainMappingSslSettings;
}
export class DomainMapping extends Resource {
  // Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
  public Name?: string;

  /*
Whether the domain creation should override any existing mappings for this domain.
By default, overrides are rejected.
Default value is `STRICT`.
Possible values are: `STRICT`, `OVERRIDE`.
*/
  public OverrideStrategy?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The resource records required to configure this domain mapping. These records must be added to the domain's DNS
configuration in order to serve the application via this domain mapping.
Structure is documented below.
*/
  public ResourceRecords?: Array<Appengine_DomainMappingResourceRecord>;

  /*
SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
Structure is documented below.
*/
  public SslSettings?: Appengine_DomainMappingSslSettings;

  /*
Relative name of the domain serving the application. Example: example.com.


- - -
*/
  public DomainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SslSettings",
        "SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.\nStructure is documented below.",
        Appengine_DomainMappingSslSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DomainName",
        "Relative name of the domain serving the application. Example: example.com.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "OverrideStrategy",
        "Whether the domain creation should override any existing mappings for this domain.\nBy default, overrides are rejected.\nDefault value is `STRICT`.\nPossible values are: `STRICT`, `OVERRIDE`.",
        [],
        false,
        false,
      ),
    ];
  }
}
