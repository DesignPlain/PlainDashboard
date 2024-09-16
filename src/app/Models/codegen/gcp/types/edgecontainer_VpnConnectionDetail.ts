import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  edgecontainer_VpnConnectionDetailCloudVpn,
  edgecontainer_VpnConnectionDetailCloudVpn_GetTypes,
} from './edgecontainer_VpnConnectionDetailCloudVpn';
import {
  edgecontainer_VpnConnectionDetailCloudRouter,
  edgecontainer_VpnConnectionDetailCloudRouter_GetTypes,
} from './edgecontainer_VpnConnectionDetailCloudRouter';

export interface edgecontainer_VpnConnectionDetail {
  /*
(Output)
Each connection has multiple Cloud VPN gateways.
Structure is documented below.
*/
  cloudVpns?: Array<edgecontainer_VpnConnectionDetailCloudVpn>;

  /*
(Output)
The error message. This is only populated when state=ERROR.
*/
  error?: string;

  /*
(Output)
The current connection state.
*/
  state?: string;

  /*
(Output)
The Cloud Router info.
Structure is documented below.
*/
  cloudRouters?: Array<edgecontainer_VpnConnectionDetailCloudRouter>;
}

export function edgecontainer_VpnConnectionDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'cloudVpns',
      '(Output)\nEach connection has multiple Cloud VPN gateways.\nStructure is documented below.',
      () => edgecontainer_VpnConnectionDetailCloudVpn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'error',
      '(Output)\nThe error message. This is only populated when state=ERROR.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      '(Output)\nThe current connection state.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'cloudRouters',
      '(Output)\nThe Cloud Router info.\nStructure is documented below.',
      () => edgecontainer_VpnConnectionDetailCloudRouter_GetTypes(),
      false,
      false,
    ),
  ];
}
