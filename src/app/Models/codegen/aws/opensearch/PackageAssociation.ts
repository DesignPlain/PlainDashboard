import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface PackageAssociationArgs {
  // Internal ID of the package to associate with a domain.
  packageId?: string;

  // Name of the domain to associate the package with.
  domainName?: string;
}
export class PackageAssociation extends DS_Resource {
  //
  public referencePath?: string;

  // Name of the domain to associate the package with.
  public domainName?: string;

  // Internal ID of the package to associate with a domain.
  public packageId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'packageId',
        'Internal ID of the package to associate with a domain.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainName',
        'Name of the domain to associate the package with.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
