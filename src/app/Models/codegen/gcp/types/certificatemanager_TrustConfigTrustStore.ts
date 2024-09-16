import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  certificatemanager_TrustConfigTrustStoreIntermediateCa,
  certificatemanager_TrustConfigTrustStoreIntermediateCa_GetTypes,
} from './certificatemanager_TrustConfigTrustStoreIntermediateCa';
import {
  certificatemanager_TrustConfigTrustStoreTrustAnchor,
  certificatemanager_TrustConfigTrustStoreTrustAnchor_GetTypes,
} from './certificatemanager_TrustConfigTrustStoreTrustAnchor';

export interface certificatemanager_TrustConfigTrustStore {
  /*
Set of intermediate CA certificates used for the path building phase of chain validation.
The field is currently not supported if trust config is used for the workload certificate feature.
Structure is documented below.
*/
  intermediateCas?: Array<certificatemanager_TrustConfigTrustStoreIntermediateCa>;

  /*
List of Trust Anchors to be used while performing validation against a given TrustStore.
Structure is documented below.
*/
  trustAnchors?: Array<certificatemanager_TrustConfigTrustStoreTrustAnchor>;
}

export function certificatemanager_TrustConfigTrustStore_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'intermediateCas',
      'Set of intermediate CA certificates used for the path building phase of chain validation.\nThe field is currently not supported if trust config is used for the workload certificate feature.\nStructure is documented below.',
      () => certificatemanager_TrustConfigTrustStoreIntermediateCa_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'trustAnchors',
      'List of Trust Anchors to be used while performing validation against a given TrustStore.\nStructure is documented below.',
      () => certificatemanager_TrustConfigTrustStoreTrustAnchor_GetTypes(),
      false,
      false,
    ),
  ];
}
