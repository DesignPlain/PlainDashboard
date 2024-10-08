import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appengine_DomainMappingSslSettings,
  appengine_DomainMappingSslSettings_GetTypes,
} from '../types/appengine_DomainMappingSslSettings';
import {
  appengine_DomainMappingResourceRecord,
  appengine_DomainMappingResourceRecord_GetTypes,
} from '../types/appengine_DomainMappingResourceRecord';

export interface DomainMappingArgs {
  /*
SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
Structure is documented below.
*/
  sslSettings?: appengine_DomainMappingSslSettings;

  /*
Relative name of the domain serving the application. Example: example.com.


- - -
*/
  domainName?: string;

  /*
Whether the domain creation should override any existing mappings for this domain.
By default, overrides are rejected.
Default value is `STRICT`.
Possible values are: `STRICT`, `OVERRIDE`.
*/
  overrideStrategy?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class DomainMapping extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The resource records required to configure this domain mapping. These records must be added to the domain's DNS
configuration in order to serve the application via this domain mapping.
Structure is documented below.
*/
  public resourceRecords?: Array<appengine_DomainMappingResourceRecord>;

  /*
SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
Structure is documented below.
*/
  public sslSettings?: appengine_DomainMappingSslSettings;

  /*
Relative name of the domain serving the application. Example: example.com.


- - -
*/
  public domainName?: string;

  // Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
  public name?: string;

  /*
Whether the domain creation should override any existing mappings for this domain.
By default, overrides are rejected.
Default value is `STRICT`.
Possible values are: `STRICT`, `OVERRIDE`.
*/
  public overrideStrategy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'sslSettings',
        'SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.\nStructure is documented below.',
        () => appengine_DomainMappingSslSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainName',
        'Relative name of the domain serving the application. Example: example.com.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'overrideStrategy',
        'Whether the domain creation should override any existing mappings for this domain.\nBy default, overrides are rejected.\nDefault value is `STRICT`.\nPossible values are: `STRICT`, `OVERRIDE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
