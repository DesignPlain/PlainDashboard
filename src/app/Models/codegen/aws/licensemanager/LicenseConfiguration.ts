import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LicenseConfigurationArgs {
  // Description of the license configuration.
  description?: string;

  // Number of licenses managed by the license configuration.
  licenseCount?: number;

  // Sets the number of available licenses as a hard limit.
  licenseCountHardLimit?: boolean;

  // Dimension to use to track license inventory. Specify either `vCPU`, `Instance`, `Core` or `Socket`.
  licenseCountingType?: string;

  // Array of configured License Manager rules.
  licenseRules?: Array<string>;

  // Name of the license configuration.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class LicenseConfiguration extends DS_Resource {
  // Sets the number of available licenses as a hard limit.
  public licenseCountHardLimit?: boolean;

  // Dimension to use to track license inventory. Specify either `vCPU`, `Instance`, `Core` or `Socket`.
  public licenseCountingType?: string;

  // Name of the license configuration.
  public name?: string;

  // Account ID of the owner of the license configuration.
  public ownerAccountId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The license configuration ARN.
  public arn?: string;

  // Description of the license configuration.
  public description?: string;

  // Number of licenses managed by the license configuration.
  public licenseCount?: number;

  // Array of configured License Manager rules.
  public licenseRules?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'licenseCountHardLimit',
        'Sets the number of available licenses as a hard limit.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'licenseCountingType',
        'Dimension to use to track license inventory. Specify either `vCPU`, `Instance`, `Core` or `Socket`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'licenseRules',
        'Array of configured License Manager rules.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the license configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the license configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'licenseCount',
        'Number of licenses managed by the license configuration.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
