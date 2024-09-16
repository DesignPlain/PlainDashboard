import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ClientArgs {
  /*
Identifier of the brand to which this client
is attached to. The format is
`projects/{project_number}/brands/{brand_id}/identityAwareProxyClients/{client_id}`.


- - -
*/
  brand?: string;

  // Human-friendly name given to the OAuth client.
  displayName?: string;
}
export class Client extends DS_Resource {
  /*
Identifier of the brand to which this client
is attached to. The format is
`projects/{project_number}/brands/{brand_id}/identityAwareProxyClients/{client_id}`.


- - -
*/
  public brand?: string;

  // The OAuth2 ID of the client.
  public clientId?: string;

  // Human-friendly name given to the OAuth client.
  public displayName?: string;

  /*
Output only. Client secret of the OAuth client.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public secret?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'brand',
        'Identifier of the brand to which this client\nis attached to. The format is\n`projects/{project_number}/brands/{brand_id}/identityAwareProxyClients/{client_id}`.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Human-friendly name given to the OAuth client.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
