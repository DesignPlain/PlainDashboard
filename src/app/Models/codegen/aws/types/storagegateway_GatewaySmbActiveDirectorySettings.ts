import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface storagegateway_GatewaySmbActiveDirectorySettings {
  // The name of the domain that you want the gateway to join.
  domainName?: string;

  /*
The organizational unit (OU) is a container in an Active Directory that can hold users, groups,
computers, and other OUs and this parameter specifies the OU that the gateway will join within the AD domain.
*/
  organizationalUnit?: string;

  // The password of the user who has permission to add the gateway to the Active Directory domain.
  password?: string;

  // Specifies the time in seconds, in which the JoinDomain operation must complete. The default is `20` seconds.
  timeoutInSeconds?: number;

  // The user name of user who has permission to add the gateway to the Active Directory domain.
  username?: string;

  //
  activeDirectoryStatus?: string;

  /*
List of IPv4 addresses, NetBIOS names, or host names of your domain server.
If you need to specify the port number include it after the colon (“:”). For example, `mydc.mydomain.com:389`.
*/
  domainControllers?: Array<string>;
}

export function storagegateway_GatewaySmbActiveDirectorySettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'activeDirectoryStatus',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'domainControllers',
      'List of IPv4 addresses, NetBIOS names, or host names of your domain server.\nIf you need to specify the port number include it after the colon (“:”). For example, `mydc.mydomain.com:389`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'domainName',
      'The name of the domain that you want the gateway to join.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'organizationalUnit',
      'The organizational unit (OU) is a container in an Active Directory that can hold users, groups,\ncomputers, and other OUs and this parameter specifies the OU that the gateway will join within the AD domain.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'password',
      'The password of the user who has permission to add the gateway to the Active Directory domain.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'timeoutInSeconds',
      'Specifies the time in seconds, in which the JoinDomain operation must complete. The default is `20` seconds.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'The user name of user who has permission to add the gateway to the Active Directory domain.',
      () => [],
      true,
      false,
    ),
  ];
}
