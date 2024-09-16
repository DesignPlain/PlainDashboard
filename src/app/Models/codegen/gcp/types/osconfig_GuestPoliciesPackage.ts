import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_GuestPoliciesPackage {
  /*
The desiredState the agent should maintain for this package. The default is to ensure the package is installed.
Possible values are: `INSTALLED`, `UPDATED`, `REMOVED`.
*/
  desiredState?: string;

  /*
Type of package manager that can be used to install this package. If a system does not have the package manager,
the package is not installed or removed no error message is returned. By default, or if you specify ANY,
the agent attempts to install and remove this package using the default package manager.
This is useful when creating a policy that applies to different types of systems.
The default behavior is ANY.
Default value is `ANY`.
Possible values are: `ANY`, `APT`, `YUM`, `ZYPPER`, `GOO`.
*/
  manager?: string;

  /*
The name of the package. A package is uniquely identified for conflict validation
by checking the package name and the manager(s) that the package targets.
*/
  name?: string;
}

export function osconfig_GuestPoliciesPackage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'desiredState',
      'The desiredState the agent should maintain for this package. The default is to ensure the package is installed.\nPossible values are: `INSTALLED`, `UPDATED`, `REMOVED`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'manager',
      'Type of package manager that can be used to install this package. If a system does not have the package manager,\nthe package is not installed or removed no error message is returned. By default, or if you specify ANY,\nthe agent attempts to install and remove this package using the default package manager.\nThis is useful when creating a policy that applies to different types of systems.\nThe default behavior is ANY.\nDefault value is `ANY`.\nPossible values are: `ANY`, `APT`, `YUM`, `ZYPPER`, `GOO`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the package. A package is uniquely identified for conflict validation\nby checking the package name and the manager(s) that the package targets.',
      () => [],
      true,
      false,
    ),
  ];
}
