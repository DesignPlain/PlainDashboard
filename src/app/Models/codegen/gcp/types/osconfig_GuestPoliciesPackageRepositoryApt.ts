import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_GuestPoliciesPackageRepositoryApt {
  /*
URI of the key file for this repository. The agent maintains a keyring at
/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg containing all the keys in any applied guest policy.
*/
  gpgKey?: string;

  // URI for this repository.
  uri?: string;

  /*
Type of archive files in this repository. The default behavior is DEB.
Default value is `DEB`.
Possible values are: `DEB`, `DEB_SRC`.
*/
  archiveType?: string;

  // List of components for this repository. Must contain at least one item.
  components?: Array<string>;

  // Distribution of this repository.
  distribution?: string;
}

export function osconfig_GuestPoliciesPackageRepositoryApt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'distribution',
      'Distribution of this repository.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'gpgKey',
      'URI of the key file for this repository. The agent maintains a keyring at\n/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg containing all the keys in any applied guest policy.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'uri',
      'URI for this repository.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'archiveType',
      'Type of archive files in this repository. The default behavior is DEB.\nDefault value is `DEB`.\nPossible values are: `DEB`, `DEB_SRC`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'components',
      'List of components for this repository. Must contain at least one item.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
