import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  beyondcorp_AppConnectorPrincipalInfoServiceAccount,
  beyondcorp_AppConnectorPrincipalInfoServiceAccount_GetTypes,
} from './beyondcorp_AppConnectorPrincipalInfoServiceAccount';

export interface beyondcorp_AppConnectorPrincipalInfo {
  /*
ServiceAccount represents a GCP service account.
Structure is documented below.
*/
  serviceAccount?: beyondcorp_AppConnectorPrincipalInfoServiceAccount;
}

export function beyondcorp_AppConnectorPrincipalInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'serviceAccount',
      'ServiceAccount represents a GCP service account.\nStructure is documented below.',
      () => beyondcorp_AppConnectorPrincipalInfoServiceAccount_GetTypes(),
      true,
      false,
    ),
  ];
}
