import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionCommitmentLicenseResource,
  compute_RegionCommitmentLicenseResource_GetTypes,
} from '../types/compute_RegionCommitmentLicenseResource';
import {
  compute_RegionCommitmentResource,
  compute_RegionCommitmentResource_GetTypes,
} from '../types/compute_RegionCommitmentResource';

export interface RegionCommitmentArgs {
  /*
The license specification required as part of a license commitment.
Structure is documented below.
*/
  licenseResource?: compute_RegionCommitmentLicenseResource;

  /*
Name of the resource. The name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  // URL of the region where this commitment may be used.
  region?: string;

  /*
A list of commitment amounts for particular resources.
Note that VCPU and MEMORY resource commitments must occur together.
Structure is documented below.
*/
  resources?: Array<compute_RegionCommitmentResource>;

  /*
Specifies whether to enable automatic renewal for the commitment.
The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.
*/
  autoRenew?: boolean;

  /*
The category of the commitment. Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified.
Possible values are: `LICENSE`, `MACHINE`.
*/
  category?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The type of commitment, which affects the discount rate and the eligible resources.
The type could be one of the following value: `MEMORY_OPTIMIZED`, `ACCELERATOR_OPTIMIZED`,
`GENERAL_PURPOSE_N1`, `GENERAL_PURPOSE_N2`, `GENERAL_PURPOSE_N2D`, `GENERAL_PURPOSE_E2`,
`GENERAL_PURPOSE_T2D`, `GENERAL_PURPOSE_C3`, `COMPUTE_OPTIMIZED_C2`, `COMPUTE_OPTIMIZED_C2D` and
`GRAPHICS_OPTIMIZED_G2`
*/
  type?: string;

  // An optional description of this resource.
  description?: string;

  /*
The plan for this commitment, which determines duration and discount rate.
The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).
Possible values are: `TWELVE_MONTH`, `THIRTY_SIX_MONTH`.


- - -
*/
  plan?: string;
}
export class RegionCommitment extends DS_Resource {
  // URL of the region where this commitment may be used.
  public region?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // Commitment end time in RFC3339 text format.
  public endTimestamp?: string;

  /*
The category of the commitment. Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified.
Possible values are: `LICENSE`, `MACHINE`.
*/
  public category?: string;

  /*
The license specification required as part of a license commitment.
Structure is documented below.
*/
  public licenseResource?: compute_RegionCommitmentLicenseResource;

  /*
Name of the resource. The name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Status of the commitment with regards to eventual expiration
(each commitment has an end date defined).
*/
  public status?: string;

  /*
Specifies whether to enable automatic renewal for the commitment.
The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.
*/
  public autoRenew?: boolean;

  // An optional description of this resource.
  public description?: string;

  /*
A list of commitment amounts for particular resources.
Note that VCPU and MEMORY resource commitments must occur together.
Structure is documented below.
*/
  public resources?: Array<compute_RegionCommitmentResource>;

  // Commitment start time in RFC3339 text format.
  public startTimestamp?: string;

  /*
The type of commitment, which affects the discount rate and the eligible resources.
The type could be one of the following value: `MEMORY_OPTIMIZED`, `ACCELERATOR_OPTIMIZED`,
`GENERAL_PURPOSE_N1`, `GENERAL_PURPOSE_N2`, `GENERAL_PURPOSE_N2D`, `GENERAL_PURPOSE_E2`,
`GENERAL_PURPOSE_T2D`, `GENERAL_PURPOSE_C3`, `COMPUTE_OPTIMIZED_C2`, `COMPUTE_OPTIMIZED_C2D` and
`GRAPHICS_OPTIMIZED_G2`
*/
  public type?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
The plan for this commitment, which determines duration and discount rate.
The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).
Possible values are: `TWELVE_MONTH`, `THIRTY_SIX_MONTH`.


- - -
*/
  public plan?: string;

  // A human-readable explanation of the status.
  public statusMessage?: string;

  // Unique identifier for the resource.
  public commitmentId?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'licenseResource',
        'The license specification required as part of a license commitment.\nStructure is documented below.',
        () => compute_RegionCommitmentLicenseResource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. The name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'category',
        'The category of the commitment. Category MACHINE specifies commitments composed of\nmachine resources such as VCPU or MEMORY, listed in resources. Category LICENSE\nspecifies commitments composed of software licenses, listed in licenseResources.\nNote that only MACHINE commitments should have a Type specified.\nPossible values are: `LICENSE`, `MACHINE`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of commitment, which affects the discount rate and the eligible resources.\nThe type could be one of the following value: `MEMORY_OPTIMIZED`, `ACCELERATOR_OPTIMIZED`,\n`GENERAL_PURPOSE_N1`, `GENERAL_PURPOSE_N2`, `GENERAL_PURPOSE_N2D`, `GENERAL_PURPOSE_E2`,\n`GENERAL_PURPOSE_T2D`, `GENERAL_PURPOSE_C3`, `COMPUTE_OPTIMIZED_C2`, `COMPUTE_OPTIMIZED_C2D` and\n`GRAPHICS_OPTIMIZED_G2`',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'plan',
        'The plan for this commitment, which determines duration and discount rate.\nThe currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).\nPossible values are: `TWELVE_MONTH`, `THIRTY_SIX_MONTH`.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'URL of the region where this commitment may be used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'resources',
        'A list of commitment amounts for particular resources.\nNote that VCPU and MEMORY resource commitments must occur together.\nStructure is documented below.',
        () => compute_RegionCommitmentResource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'autoRenew',
        'Specifies whether to enable automatic renewal for the commitment.\nThe default value is false if not specified.\nIf the field is set to true, the commitment will be automatically renewed for either\none or three years according to the terms of the existing commitment.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
