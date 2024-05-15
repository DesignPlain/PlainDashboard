import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ClientArgs {
  /*
Identifier of the brand to which this client
is attached to. The format is
`projects/{project_number}/brands/{brand_id}/identityAwareProxyClients/{client_id}`.


- - -
*/
  Brand?: string;

  // Human-friendly name given to the OAuth client.
  DisplayName?: string;
}
export class Client extends Resource {
  /*
Identifier of the brand to which this client
is attached to. The format is
`projects/{project_number}/brands/{brand_id}/identityAwareProxyClients/{client_id}`.


- - -
*/
  public Brand?: string;

  // The OAuth2 ID of the client.
  public ClientId?: string;

  // Human-friendly name given to the OAuth client.
  public DisplayName?: string;

  /*
Output only. Client secret of the OAuth client.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public Secret?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Brand",
        "Identifier of the brand to which this client\nis attached to. The format is\n`projects/{project_number}/brands/{brand_id}/identityAwareProxyClients/{client_id}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-friendly name given to the OAuth client.",
        [],
        true,
        true,
      ),
    ];
  }
}
